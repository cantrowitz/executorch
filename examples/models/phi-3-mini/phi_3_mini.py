# Copyright (c) Meta Platforms, Inc. and affiliates.
# All rights reserved.
#
# This source code is licensed under the BSD-style license found in the
# LICENSE file in the root directory of this source tree.
import torch.nn

from extension.llm.transformers.static_cache import StaticCache
from transformers import Phi3ForCausalLM


class Phi3Mini(torch.nn.Module):

    def __init__(self, model: Phi3ForCausalLM, max_batch_size: int, max_seq_len: int):
        super().__init__()
        self.model = model
        self.cache = StaticCache(
            config=model.config,
            max_batch_size=max_batch_size,
            max_cache_len=max_seq_len,
            device=self.model.device,
            dtype=self.model.dtype,
        )

    def forward(
        self,
        input_ids: torch.LongTensor = None,
        input_pos: torch.LongTensor = None,
    ) -> torch.FloatTensor:
        return self.model.forward(
            input_ids=input_ids,
            use_cache=True,
            return_dict=True,
            past_key_values=self.cache,
            cache_position=torch.arange(0, input_pos.item(), device=self.model.device),
        ).logits
