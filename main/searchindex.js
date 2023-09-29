Search.setIndex({"docnames": ["compiler-custom-compiler-passes", "compiler-delegate-and-partitioner", "compiler-kernel-fusion-pass", "compiler-memory-planning", "examples-end-to-end-to-lower-model-to-delegate", "export-overview", "getting-started-architecture", "getting-started-setup", "index", "intro-how-it-works", "intro-overview", "ir-exir", "ir-high-order-operators", "ir-ops-set-definition", "kernel-library-custom-aten-kernel", "kernel-library-overview", "markdown-sphinx-tips-tricks", "quantization-custom-quantization", "runtime-api", "runtime-backend-delegate-implementation-and-linking", "runtime-build-and-cross-compilation", "runtime-custom-memory-allocator", "runtime-error-handling", "runtime-overview", "runtime-platform-abstraction-layer", "sdk-bundled-io", "sdk-debugging", "sdk-delegate-integration", "sdk-profiling", "tutorials/export-to-executorch-tutorial", "tutorials/index", "tutorials/sg_execution_times", "tutorials/template_tutorial"], "filenames": ["compiler-custom-compiler-passes.md", "compiler-delegate-and-partitioner.md", "compiler-kernel-fusion-pass.md", "compiler-memory-planning.md", "examples-end-to-end-to-lower-model-to-delegate.md", "export-overview.md", "getting-started-architecture.md", "getting-started-setup.md", "index.rst", "intro-how-it-works.md", "intro-overview.md", "ir-exir.md", "ir-high-order-operators.md", "ir-ops-set-definition.md", "kernel-library-custom-aten-kernel.md", "kernel-library-overview.md", "markdown-sphinx-tips-tricks.md", "quantization-custom-quantization.md", "runtime-api.md", "runtime-backend-delegate-implementation-and-linking.md", "runtime-build-and-cross-compilation.md", "runtime-custom-memory-allocator.md", "runtime-error-handling.md", "runtime-overview.md", "runtime-platform-abstraction-layer.md", "sdk-bundled-io.md", "sdk-debugging.md", "sdk-delegate-integration.md", "sdk-profiling.md", "tutorials/export-to-executorch-tutorial.rst", "tutorials/index.rst", "tutorials/sg_execution_times.rst", "tutorials/template_tutorial.rst"], "titles": ["Custom Compiler Passes and Partitioners", "Backend and Delegate", "Kernel Fusion Pass", "Memory Planning", "An end-to-end example to lower a model as a delegate", "Exporting to Executorch", "High-level Architecture and Components of ExecuTorch", "Setting Up ExecuTorch", "Welcome to the ExecuTorch Documentation", "How does ExecuTorch work", "ExecuTorch Overview", "EXIR", "High-order Operators", "OpSet definition", "Custom ATen Compliant Kernel Implementation and Linking", "Kernel Library Overview", "Markdown in Sphinx Tips and Tricks", "Custom Quantization", "Runtime API", "Backend Delegate Implementation and Linking", "Build and cross-compilation", "Custom Memory Allocator", "Runtime Error Handling", "Runtime Overview", "Platform Abstraction Layer", "BundledIO", "Debugging", "Delegate Integration", "Profiling", "Exporting to ExecuTorch Tutorial", "Tutorials", "Computation times", "Template Tutorial"], "terms": {"can": [0, 1, 4, 5, 6, 7, 8, 9, 16, 29, 32], "roughli": 0, "categor": 0, "coupl": [0, 1], "ax": 0, "axi": 0, "A": [0, 1, 7, 8, 16, 29], "creat": [0, 1, 6, 7, 29, 32], "one": [0, 1, 8, 16, 29, 32], "map": [0, 4, 16], "exampl": [0, 1, 6, 7, 16, 29, 30, 32], "decomposit": 0, "mani": [0, 6], "fusion": [0, 6, 9], "b": [0, 4, 7, 16, 29], "perform": [0, 1, 4, 6, 7, 8, 9], "forward": [0, 1, 4, 7, 29], "iter": [0, 6], "shape": [0, 6, 9, 29], "propag": 0, "backward": [0, 8], "dead": 0, "code": [0, 1, 30, 32], "elimin": [0, 9], "c": [0, 6, 7, 9, 16, 29], "depend": [0, 1, 4, 6, 7], "node": [0, 1, 4, 6, 9, 29], "eg": 0, "out": [0, 1, 6, 7, 8, 9, 29], "variant": [0, 6, 29], "convers": [0, 6, 9, 29], "global": [0, 4], "graph": [0, 1, 4, 6, 7, 8, 9, 29], "memori": [0, 6, 9], "plan": [0, 1, 6, 9], "our": [0, 6, 7, 29], "project": [0, 7, 8], "frequenc": 0, "us": [0, 1, 4, 5, 6, 7, 8, 9, 16, 29, 32], "case": [0, 1, 6, 9, 29], "ar": [0, 1, 4, 6, 7, 8, 9, 29], "For": [0, 1, 6, 7, 8, 16, 32], "look": [0, 1, 16, 29], "we": [0, 1, 4, 5, 6, 7, 8, 9, 16, 29], "helper": [0, 1, 4, 6], "class": [0, 1, 4, 16, 29], "call": [0, 1, 4, 5, 6, 9, 29], "exportpass": [0, 29], "thi": [0, 1, 4, 5, 6, 7, 8, 9, 16, 18, 29, 32], "an": [0, 1, 5, 6, 7, 8, 9, 16, 18, 29], "interpret": [0, 7], "wai": [0, 1, 4, 6, 7, 29], "where": [0, 1, 6, 9, 29], "execut": [0, 4, 5, 7, 9, 31], "each": [0, 6, 29], "recreat": 0, "except": [0, 8, 29], "transform": [0, 1, 6, 29], "specifi": [0, 1, 29], "allow": [0, 6, 9, 16, 29], "preserv": [0, 6, 9], "ir": [0, 1, 4, 8, 29], "spec": [0, 1, 4, 29], "ensur": [0, 7], "all": [0, 1, 4, 6, 7, 8, 29, 30, 32], "while": [0, 1, 4, 9, 29], "meet": 0, "includ": [0, 4, 6, 7, 9, 16, 29], "metadata": [0, 6, 29], "stack": [0, 29], "trace": [0, 4, 6, 29], "faketensor": 0, "valu": [0, 1, 29], "torch": [0, 1, 4, 5, 6, 7, 8, 29, 32], "nn": [0, 1, 4, 6, 7, 29], "modul": [0, 1, 6, 7], "heirarchi": 0, "updat": [0, 7], "made": [0, 9], "To": [0, 1, 4, 5, 6, 7, 8, 29, 32], "implement": [0, 1, 4, 5, 6, 9, 29], "subclass": 0, "expos": 0, "function": [0, 1, 4, 6, 9, 29], "when": [0, 1, 9, 29], "run": [0, 1, 4, 6, 8, 9, 32], "new": [0, 9, 29], "contain": [0, 1, 7, 29], "chang": [0, 1, 7, 8, 29], "mean": [0, 1, 29], "must": [0, 6, 29], "runnabl": [0, 8], "cpu": [0, 29], "invari": 0, "maintain": [0, 8], "after": [0, 4, 7, 16, 29], "want": [0, 1, 7, 8, 29], "replac": [0, 29], "op": [0, 6, 9, 29], "anoth": [0, 1, 4, 16], "given": [0, 1, 8, 9, 29], "fx": [0, 1, 29], "graphmodul": [0, 1, 29], "everi": 0, "time": [0, 6, 7, 8, 9, 29, 32], "see": [0, 1, 8, 16, 29], "return": [0, 1, 4, 6, 7, 29], "consid": [0, 6, 9], "follow": [0, 1, 4, 6, 7, 9, 29, 32], "replaceinplacereluwithoutofplacerelupass": 0, "relu_": 0, "place": [0, 29], "version": 0, "relu": [0, 29], "which": [0, 1, 4, 5, 6, 7, 9, 29], "def": [0, 1, 4, 16, 29], "call_oper": [0, 29], "self": [0, 1, 4, 16, 29], "arg": [0, 1, 7, 29], "kwarg": [0, 7, 29], "meta": [0, 1, 29], "aten": [0, 6, 7, 9, 29], "default": [0, 6, 29], "super": [0, 1, 4, 29], "replace_pass": 0, "new_graph_modul": 0, "graph_modul": [0, 29], "The": [0, 1, 4, 5, 6, 7, 9, 16, 29, 32], "call_funct": [0, 7], "result": [0, 1, 6, 9, 29, 32], "oper": [0, 1, 6, 7, 8, 9, 29], "argument": [0, 6, 29], "If": [0, 1, 4, 7, 8, 29, 32], "do": [0, 1, 7, 9, 29, 32], "like": [0, 1, 6, 8, 16, 29, 32], "other": [0, 4, 6, 7, 16, 29, 32], "would": [0, 6, 29], "make": [0, 1, 5, 9, 29, 32], "replaceaddwithmulsub": 0, "origin": [0, 9, 29], "f": [0, 1, 4, 29], "y": [0, 4, 29], "z": [0, 29], "add": [0, 1, 4, 7, 16, 29, 32], "mul_r": 0, "mul": [0, 1, 7, 29], "sub": [0, 29], "remov": [0, 32], "just": 0, "removedetachpass": 0, "detach": 0, "detach_copi": 0, "assert": 0, "len": 0, "0": [0, 4, 6, 7, 9, 29, 31, 32], "convert": [0, 4, 6, 7, 9, 29], "scalar": [0, 6, 29], "within": [0, 4, 6, 29], "tensor": [0, 6, 7, 9, 29, 32], "It": [0, 1, 4, 6, 9, 29], "might": [0, 7, 8, 18, 29], "someth": [0, 1], "args_map": 0, "fn": 0, "isinst": 0, "tupl": [0, 29], "dict": 0, "list": [0, 1, 4, 7, 9, 16, 29], "copi": [0, 7, 32], "kei": [0, 32], "schema": 0, "i": [0, 7, 16], "enumer": 0, "_schema": 0, "name": [0, 4, 16, 29], "elif": 0, "kwarg_onli": 0, "scalartotensorpass": 0, "try_coerc": 0, "float": 0, "int": 0, "bool": 0, "type": [0, 4, 6, 29], "tensortyp": 0, "els": [0, 6, 29], "s": [0, 1, 4, 6, 9, 29], "rewrit": [0, 6], "pattern": 0, "match": 0, "inplac": 0, "input": [0, 1, 7, 9, 29], "callabl": [0, 29], "written": [0, 6, 9], "same": [0, 7, 9, 29], "exir": [0, 1, 4, 6, 7, 8, 9, 29], "you": [0, 5, 6, 7, 8, 16, 29, 32], "so": [0, 6, 7, 29], "find": [0, 1], "correct": 0, "treat": 0, "wildcard": 0, "from": [0, 1, 4, 6, 7, 8, 9, 16, 29, 32], "import": [0, 4, 5, 6, 7, 29, 32], "subgraph_rewrit": 0, "replace_pattern": 0, "replaced_pattern": 0, "replace_pattern_with_filt": 0, "traced_modul": 0, "replacedpattern": 0, "dataclass": 0, "wa": [0, 9, 29], "found": [0, 1, 4, 5, 16, 29], "anchor": 0, "larger": 0, "nodes_map": 0, "were": [0, 32], "ad": [0, 1], "have": [0, 1, 4, 6, 7, 9, 29, 32], "normal": 0, "stack_trac": 0, "val": 0, "nn_module_stack": 0, "third": [0, 4, 9, 29], "most": [0, 4, 6, 9, 16, 29], "basic": [0, 7], "passbas": 0, "content": [0, 16, 29], "addition": [0, 5, 9, 29], "requir": [0, 1, 6, 7, 29], "befor": [0, 6, 7, 8, 16, 29], "note": [0, 16, 29], "also": [0, 1, 4, 6, 8, 9, 29], "overridden": 0, "directli": [0, 1, 4, 7, 29], "instanc": 0, "replaceaddpass": 0, "__init__": [0, 1, 4, 16, 29], "replace_op": 0, "gm": [0, 4], "target": [0, 6, 7, 9, 29], "option": [0, 1, 6, 29], "rais": [0, 29], "valueerror": 0, "No": [0, 9, 29], "replace_add_with_div": 0, "div": [0, 29], "passmanag": 0, "multipl": [0, 1, 6, 9, 29], "initi": [0, 4, 7], "set": [0, 5, 6, 9, 29], "flag": [0, 7, 8], "collect": 0, "executorch": [0, 1, 4, 30, 31], "pass_manag": 0, "pm": 0, "replace_div_with_mul": 0, "run_checks_after_each_pass": 0, "true": 0, "suppress_check_failur": 0, "fals": [0, 29], "graph_module_out": 0, "common": [0, 16], "check": [0, 8, 29], "set_check": 0, "take": [0, 4, 5, 29], "check_div_target": 0, "should": [0, 1, 6, 8], "add_check": 0, "There": [0, 1, 4, 6, 9, 29], "partit": [0, 1], "howev": [0, 1, 8], "necessarili": 0, "produc": [0, 1, 4], "compliant": [0, 6, 9], "care": 0, "them": [0, 5, 7, 8, 29], "specif": [0, 1, 4, 6, 9, 29, 32], "subgraphmatch": 0, "attribut": [0, 29], "placehold": [0, 1, 7], "match_output": 0, "output": [0, 6, 7, 9, 16, 29, 32], "part": [0, 1, 4, 5, 8, 9], "ignor": [0, 29], "dure": [0, 1, 4, 6, 9, 29], "match_placehold": 0, "remove_overlapping_match": 0, "overlap": 0, "onli": [0, 1, 4, 6, 9, 16, 29, 32], "first": [0, 1, 7, 9, 29], "ignore_liter": 0, "liter": 0, "equal": [0, 29], "instead": [0, 6, 29], "matcher_util": 0, "largemodel": 0, "_weight": 0, "paramet": [0, 1, 16, 29], "ones": [0, 1, 4, 29], "_bia": 0, "addmm": 0, "large_model_graph": 0, "captur": [0, 1, 4, 7, 9, 29], "large_input": 0, "to_edg": [0, 1, 4, 7, 29], "patternmodel": 0, "_weight_1": 0, "5": [0, 1, 29, 32], "_bias_1": 0, "pattern_graph": 0, "pattern_input": 0, "subgraph_match": 0, "match_result": 0, "internalmatch": 0, "field": 0, "default_factori": 0, "placeholder_nod": 0, "returning_nod": 0, "largest": 0, "support": [0, 1, 6, 7, 9], "capabilitybasedpartition": 0, "operator_support": 0, "operatorsupportbas": 0, "object": [0, 29], "determin": 0, "allows_single_node_partit": 0, "singl": [0, 6], "form": 0, "non_compute_op": 0, "sequenc": 0, "str": [0, 4], "non": [0, 4, 7], "comput": [0, 9, 29], "ex": 0, "view": 0, "_oper": 0, "getitem": [0, 29], "allowed_single_node_partition_op": 0, "belong": 0, "done": [0, 1, 29], "overrid": 0, "is_node_support": 0, "chain": 0, "operatorsuppportbas": 0, "ani": [0, 1, 7, 9, 29], "any_chain": 0, "infra": 0, "addmuloperatorsupport": 0, "submodul": [0, 1, 4, 6, 7], "capability_partition": 0, "op_support": 0, "partition_list": 0, "propose_partit": 0, "mai": [0, 1, 7, 8, 9], "fuse_partit": 0, "modifi": [0, 16], "toplevel": 0, "through": [0, 1, 5, 6, 7, 8, 9, 29, 32], "call_modul": 0, "becaus": [0, 6, 8, 9, 29], "provid": [0, 1, 4, 5, 6, 7, 8, 9, 29], "generate_pattern_op_partit": 0, "These": [0, 4, 8, 9], "obtain": 0, "recommend": [0, 7], "symbol": [0, 29], "accur": 0, "edg": [0, 1, 4, 5, 7, 9], "dialect": [0, 1, 4, 6, 7], "manual": 0, "craft": 0, "get": [0, 1, 5, 30], "create_op_support": 0, "create_pattern_support": 0, "togeth": 0, "possibl": [0, 6, 9], "union": 0, "more": [0, 1, 4, 5, 6, 7, 16, 29], "complic": 0, "user": [0, 1, 4, 6, 8, 32], "higher": 0, "linear": [0, 29], "now": [0, 6, 7, 29], "decompos": [0, 1, 6, 9], "permut": 0, "get_source_partit": 0, "wanted_sourc": 0, "sourcepartit": 0, "leaf": 0, "dictionari": [0, 29], "correspond": [0, 6], "flatten": [0, 6, 29], "particular": 0, "module_typ": 0, "need": [0, 1, 4, 6, 7, 8, 9, 18, 29], "input_nod": 0, "being": [0, 1, 9, 29], "outsid": [0, 29], "output_nod": 0, "param": [0, 29], "m": [0, 7, 29], "linear1": 0, "linear2": 0, "randn": [0, 4, 29], "edge_graph": 0, "print": [0, 7, 16, 29, 32], "arg0": [0, 29], "_param_constant0": [0, 29], "get_attr": [0, 1], "permute_default": 0, "permute_copi": 0, "_param_constant1": [0, 29], "addmm_default": 0, "t_default": 0, "_param_constant0_1": 0, "permute_default_1": 0, "_param_constant1_1": 0, "addmm_default_1": 0, "t_default_1": 0, "relu_default": [0, 29], "_param_constant2": 0, "permute_default_2": 0, "_param_constant3": 0, "addmm_default_2": 0, "t_default_2": 0, "module_partit": 0, "modulepartit": 0, "activ": [0, 7, 9], "audienc": [1, 4], "vendor": [1, 4, 9], "develop": [1, 6, 7, 9], "who": [1, 4, 6, 9], "interest": [1, 4], "integr": [1, 6, 9], "own": [1, 6, 7], "compil": [1, 4, 9, 29], "hardwar": [1, 4, 6, 9], "entri": [1, 4, 6, 9, 29], "point": [1, 4, 6, 9, 29], "process": [1, 4, 5, 6, 9, 29, 32], "pytorch": [1, 4, 5, 6, 7, 8, 9, 29, 30, 32], "program": [1, 4, 5, 8, 9, 29], "leverag": [1, 4, 6], "effici": [1, 4, 6, 7, 9], "benefit": [1, 4], "special": [1, 4, 9, 29], "still": [1, 4, 6, 29], "experi": [1, 4, 8], "close": [1, 4], "At": [1, 6, 9, 29], "high": [1, 9, 29], "level": [1, 4, 9, 29], "defin": [1, 4, 6, 7], "2": [1, 6, 7, 9, 16, 29, 32], "compon": 1, "repres": [1, 6, 9, 29], "api": [1, 4, 5, 6, 8, 9, 29], "aot": [1, 6], "e": [1, 9, 29], "g": [1, 9], "optim": [1, 6, 9, 29], "destroi": 1, "releas": [1, 8], "resourc": 1, "compos": [1, 4], "expect": [1, 7, 8], "blob": [1, 4, 29], "binari": [1, 4, 6, 7, 8, 9, 29], "desir": [1, 6], "profil": [1, 6, 9], "inform": [1, 6, 16, 29], "serial": [1, 4, 6, 29], "file": [1, 4, 7, 16, 18, 31, 32], "load": [1, 4, 6, 7, 9, 29], "devic": [1, 5, 6, 8, 9, 29], "edge_program": [1, 4, 29], "exportedprogram": [1, 4, 29], "compile_spec": [1, 4], "compilespec": [1, 4], "preprocessresult": 1, "demo": [1, 29], "here": [1, 4, 7, 16, 29, 32], "loop": 1, "sin": [1, 4, 29], "instruct": [1, 9], "string": 1, "later": [1, 6, 29], "pars": 1, "pass": [1, 4, 6, 9], "custom": [1, 6, 8, 9, 29], "init": [1, 7], "respons": [1, 9], "further": [1, 6, 9, 29, 32], "unit": 1, "well": [1, 6, 9, 16], "handl": 1, "And": 1, "final": [1, 6, 7, 9, 29], "some": [1, 6, 8, 29], "its": [1, 6, 7, 9, 29], "lifespan": 1, "__et_nodiscard": 1, "virtual": [1, 7], "delegatehandl": 1, "freeablebuff": 1, "arrayref": 1, "memoryalloc": 1, "memory_alloc": 1, "evalu": 1, "held": 1, "void": 1, "__et_unus": 1, "onc": 1, "readi": [1, 5, 7, 8], "thei": 1, "regist": [1, 4, 6, 29], "via": [1, 4, 29], "register_backend": 1, "const": [1, 7], "invok": 1, "either": [1, 4, 6, 9], "static": [1, 4, 6, 29], "namespac": [1, 29], "auto": 1, "cl": [1, 29], "backendwithcompil": 1, "backendwithcompilerdemo": [1, 4, 29], "success_with_compil": 1, "debug": [1, 6, 9, 29], "handler": 1, "thrown": 1, "surfac": 1, "back": [1, 4], "python": [1, 4, 7, 9, 16, 29, 30, 32], "frontend": 1, "sourc": [1, 7, 9, 16, 29, 30, 32], "below": [1, 6, 32], "tan": 1, "problemat": 1, "tanmodul": 1, "x": [1, 4, 7, 9, 29, 32], "tan_modul": 1, "model_input": [1, 4], "1": [1, 6, 7, 9, 16, 29, 32], "edgeir_m": 1, "lowered_tan_modul": 1, "to_backend": [1, 4, 29], "compositemodelwithtan": 1, "lowered_tan": 1, "output_from_submodul": 1, "composite_model_with_tan": 1, "exec_prog": [1, 4], "to_executorch": [1, 4, 7, 29], "buff": 1, "buffer": [1, 4, 7, 29], "executor": [1, 4, 6], "executorch_modul": 1, "_load_for_executorch_from_buff": 1, "throw": 1, "model_output": 1, "tan_default": 1, "debug_handl": [1, 29], "how": [1, 7, 8, 16, 29], "data": [1, 6, 29], "lift": 1, "weight": 1, "bias": 1, "suppli": 1, "access": [1, 29], "export": [1, 4, 7, 8, 9, 30, 31], "get_param": 1, "_export": [1, 29], "util": [1, 7, 29], "py": [1, 4, 7, 16, 29, 31, 32], "emb": 1, "bia": [1, 4, 29], "In": [1, 4, 6, 7, 8, 9, 16, 29], "d": [1, 4], "tag": [1, 4, 8, 29], "state": [1, 9, 29], "partition": [1, 4, 29], "descript": 1, "3": [1, 7, 29, 32], "lower": [1, 6, 8], "haven": 1, "t": [1, 9], "yet": [1, 8], "4": [1, 7, 16, 29], "show": [1, 7], "up": [1, 29], "control": [1, 6, 9, 29, 32], "flow": [1, 6, 9, 29], "won": 1, "hold": 1, "ye": 1, "two": [1, 6, 9, 29], "differ": [1, 6, 29], "backend_1": 1, "backend_2": 1, "paritition": 1, "backend_1_paritition": 1, "backend_2_partition": 1, "Will": 1, "algorithm": [1, 6], "exported_program_backend_1": 1, "exported_program": [1, 29], "rest": 1, "backend_2_paritition": 1, "exported_program_backend_1_and_2": 1, "concret": 1, "qnnpack": 1, "xnnpack": 1, "open": [1, 4, 7, 9, 29], "box": [1, 6], "refer": [1, 4, 6, 16, 29], "easi": 1, "try": [1, 29], "becuas": 1, "usual": [1, 4], "order": [1, 6], "better": [1, 9, 29], "go": [1, 6, 9, 29, 32], "sai": 1, "backend_1_2_partition": 1, "insid": [1, 4], "logic": 1, "regardless": 1, "backend2": 1, "none": [1, 29], "delegation_spec_1": 1, "delegationspec": 1, "backend1": 1, "delegation_spec_2": 1, "partition_tag": [1, 4], "edge_graph_modul": 1, "partiton": 1, "node_to_backend_1": 1, "select": [1, 6], "delegation_tag": 1, "backend2_tag": 1, "partitioner_1": 1, "id": [1, 7], "node_to_backend_2": 1, "partitioner_2": 1, "6": 1, "Is": 1, "write": [1, 4, 7, 29], "tba": [2, 3, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], "ml": [4, 29], "engin": [4, 6, 9], "appli": [4, 6, 7, 9, 29], "acceler": [4, 9], "backend": [4, 6, 7], "provit": 4, "exececutorch": 4, "your": [4, 5, 8, 16, 32], "standard": [4, 6, 8, 9, 16], "three": [4, 6, 9, 29], "good": [4, 6], "test": [4, 7, 8, 29, 32], "preprocess": 4, "stage": [4, 8, 9, 29], "reus": [4, 29], "accord": 4, "both": [4, 6, 16, 29], "streamlin": [4, 6, 9], "procecss": 4, "start": [4, 6, 7, 16, 30], "represent": [4, 6, 8, 9, 29], "loweredbackendmodul": [4, 29], "document": [4, 5, 6, 16, 29], "backend_api": [4, 29], "backend_id": [4, 29], "emit": [4, 6], "flatbuff": [4, 6, 7, 29], "put": 4, "parent": 4, "eventu": [4, 6], "methodcompilespec": 4, "lowerablesubmodel": 4, "to_be_low": 4, "example_input": 4, "to_be_lowered_exir_submodul": 4, "backend_with_compiler_demo": [4, 29], "lowered_modul": [4, 29], "format": [4, 6, 9, 29], "save": [4, 6, 7, 9], "local": [4, 7, 32], "save_path": [4, 29], "pte": [4, 7, 29], "wb": [4, 7, 29], "altern": [4, 7, 29], "nonlowerablesubmodel": 4, "lowerpart": 4, "compositemodel": 4, "non_lower": [4, 29], "ret": [4, 29], "composite_model": 4, "certain": 4, "overload": 4, "tpartition": 4, "meant": 4, "avail": [4, 7, 8, 9], "insert": [4, 29], "top": [4, 7], "op_partitioner_demo": [4, 29], "addmulpartitionerdemo": [4, 29], "executorchbackendconfig": [4, 29], "specproppass": 4, "variabl": [4, 32], "explicitli": 4, "main": [4, 8, 9], "long": [4, 8], "link": [4, 6, 9, 32], "librari": [4, 5, 6, 9], "One": [5, 8], "step": [5, 6, 8, 9, 29], "achiev": 5, "core": [5, 6, 9, 29], "tutori": [5, 7, 31], "easier": [5, 9, 29], "understand": [5, 7], "learn": [5, 7, 8, 9, 32], "about": [5, 8, 29], "model": [5, 6, 7, 8, 9], "complet": [5, 7, 8], "read": [5, 7, 8, 32], "page": [6, 9, 16], "describ": [6, 8, 9, 32], "technic": 6, "individu": 6, "toward": 6, "deploi": [6, 9], "onto": 6, "context": 6, "ai": [6, 9], "divers": 6, "critic": 6, "power": [6, 9], "realtim": 6, "monolith": 6, "solut": 6, "practic": [6, 32], "modular": 6, "layer": 6, "extend": [6, 16], "workflow": [6, 9, 29], "opinion": 6, "greatli": 6, "improv": [6, 8, 9, 29], "portabl": [6, 9], "lightweight": [6, 9], "cross": 6, "platform": [6, 8, 9], "easili": [6, 7, 9], "shown": [6, 7, 29], "diagram": 6, "number": [6, 9], "ll": [6, 7, 29], "discuss": 6, "separ": [6, 29], "figur": [6, 9], "illustr": [6, 9], "phase": 6, "flexibl": [6, 7, 9], "usabl": 6, "torchdynamo": [6, 8, 9], "aotautograd": 6, "quantiz": [6, 8, 9], "dynam": [6, 9], "etc": 6, "often": 6, "simpli": 6, "ahead": [6, 8, 9, 29], "small": [6, 9, 29], "overhead": [6, 9], "push": 6, "work": [6, 7, 29], "much": [6, 29], "accomplish": 6, "author": [6, 16, 29, 32], "eager": [6, 9, 29], "mode": [6, 9, 29], "advanc": [6, 7], "featur": [6, 7, 8], "branch": 6, "constraint": [6, 29], "variou": 6, "With": 6, "intermedi": [6, 8, 9], "gener": [6, 8, 9, 29, 30, 32], "base": [6, 8, 9], "along": [6, 29], "path": [6, 7], "detail": [6, 29], "ha": [6, 7, 9, 16, 29], "clear": 6, "contract": 6, "fulli": [6, 9, 29], "dispatch": 6, "hierarchi": [6, 29], "bigger": 6, "autograd": [6, 29], "safe": [6, 9, 29], "qat": 6, "awar": 6, "train": [6, 29], "ptq": 6, "post": 6, "whole": 6, "help": [6, 8, 29], "reduc": [6, 9], "size": [6, 7, 9], "thousand": 6, "ideal": [6, 9], "fundament": 6, "kernel": [6, 29], "smaller": 6, "serializ": 6, "abov": [6, 9], "agnost": [6, 29], "ultim": [6, 29], "dtype": [6, 29], "plu": 6, "layout": 6, "dim_ord": 6, "those": [6, 9, 29], "focus": 6, "domain": 6, "addit": [6, 7, 9, 29], "enabl": [6, 7, 8, 9], "build": [6, 9, 32], "deleg": [6, 8, 9], "coreml": 6, "io": [6, 8, 9], "qnn": 6, "qualcomm": 6, "tosa": 6, "arm": 6, "full": [6, 9, 29, 32], "partial": [6, 9], "swap": [6, 9], "semant": [6, 9], "equival": 6, "offload": 6, "aka": [6, 9], "async": 6, "behavior": 6, "suitabl": 6, "environ": [6, 29, 32], "On": 6, "deploy": [6, 8, 9], "alloc": [6, 29], "free": 6, "signific": 6, "avoid": 6, "sens": 6, "creation": 6, "embed": [6, 9], "system": [6, 7, 9], "recogn": 6, "applic": 6, "minim": [6, 9], "abstract": 6, "log": 6, "registri": 6, "manag": [6, 7], "trigger": 6, "veri": 6, "research": [6, 32], "product": [6, 9], "essenti": 6, "tool": [6, 7, 9], "cover": [6, 29, 32], "visual": 6, "sinc": [6, 29], "end": [6, 7, 16, 29, 32], "ecosystem": [6, 9], "correl": 6, "displai": 6, "direct": [6, 16], "quickli": 6, "walk": [7, 32], "configur": [7, 9], "instal": [7, 29], "what": [7, 8, 32], "prerequisit": [7, 32], "concept": [7, 32], "overview": 7, "host": 7, "os": 7, "cento": 7, "maco": 7, "ventura": 7, "m1": 7, "x86_64": 7, "everyth": 7, "smoothli": 7, "conda": [7, 8, 29], "packag": [7, 29], "languag": 7, "built": 7, "pip": [7, 29], "conveni": 7, "section": [7, 8, 16], "alreadi": [7, 9], "machin": [7, 9], "guid": 7, "yn": 7, "10": [7, 29], "flatc": 7, "command": [7, 32], "line": [7, 16, 29], "forg": [7, 29], "clone": [7, 29], "repositori": [7, 16, 32], "git": [7, 29], "github": [7, 29], "com": [7, 29], "cd": [7, 29], "sync": 7, "bash": [7, 29], "install_requir": [7, 29], "sh": [7, 29], "successfulli": 7, "Then": [7, 32], "extens": [7, 16], "demonstr": 7, "script": [7, 29, 32], "export_exampl": 7, "simpl": 7, "python3": [7, 29], "model_nam": 7, "arg0_1": [7, 29], "num_us": 7, "arg1_1": [7, 29], "aten_add_tensor": [7, 29], "_op": [7, 29], "aten_add_tensor_1": [7, 29], "aten_add_tensor_2": 7, "aten_add_tensor_3": 7, "action": 7, "get_random_input": 7, "principl": [7, 9], "buck2": 7, "executor_runn": 7, "almost": 7, "involv": 7, "wrapper": 7, "zstandard": 7, "zstd": 7, "pip3": 7, "prebuilt": 7, "archiv": 7, "repo": [7, 29], "fetch": 7, "necessari": [7, 9, 29], "commit": [7, 8], "hash": 7, "therefor": 7, "period": 7, "upstream": 7, "decompress": 7, "filenam": 7, "unknown": 7, "linux": [7, 9], "musl": 7, "zst": 7, "cdq": 7, "downloaded_filenam": 7, "tmp": 7, "chmod": 7, "root": 7, "config": 7, "lock": 7, "27036": 7, "event": 7, "e725eb0d": 7, "f4a1": 7, "484e": 7, "b0d3": 7, "8133d67b6fdd": 7, "network": 7, "down": [7, 9], "670": 7, "kib": 7, "remain": 7, "340": 7, "954": 7, "cach": 7, "hit": 7, "elaps": 7, "13": 7, "2s": 7, "376": 7, "remot": 7, "succeed": 7, "proce": 7, "buck": 7, "model_path": 7, "4a23602b": 7, "25ba": 7, "4b95": 7, "a212": 7, "3cd077136062": 7, "job": 7, "0s": 7, "00": [7, 31], "005837": 7, "cpp": 7, "75": 7, "005852": 7, "85": 7, "method": [7, 29], "005860": 7, "140": 7, "48": 7, "005909": 7, "181": 7, "005913": 7, "h": 7, "104": 7, "refil": 7, "005915": 7, "005917": 7, "186": 7, "prepar": [7, 29], "005949": 7, "195": 7, "005954": 7, "210": 7, "8": 7, "000000": 7, "congratul": 7, "explor": 7, "capabl": [7, 8, 9], "review": 7, "directori": [7, 32], "infrastructur": 8, "everywher": 8, "vr": 8, "wearabl": [8, 9], "android": [8, 9], "mobil": [8, 9], "goal": [8, 29], "wider": 8, "heavili": 8, "reli": 8, "technolog": [8, 9], "familiar": [8, 9], "dive": 8, "classifi": 8, "statu": 8, "stabl": 8, "term": [8, 9, 29], "major": 8, "limit": 8, "gap": 8, "compat": [8, 9], "although": 8, "break": 8, "happen": 8, "notic": [8, 29], "beta": 8, "feedback": 8, "coverag": 8, "across": [8, 9], "classif": 8, "prototyp": 8, "typic": [8, 9], "distribut": 8, "pypi": 8, "sometim": 8, "behind": 8, "earli": 8, "topic": [8, 32], "gentl": 8, "introduct": 8, "interact": 8, "templat": [8, 30, 31], "delet": 8, "runtim": [8, 9, 29], "laptop": 9, "phone": 9, "iot": 9, "express": [9, 32], "seri": 9, "convolut": [9, 29], "low": 9, "infer": 9, "compress": 9, "subgraph": [9, 29], "latenc": 9, "locat": 9, "footprint": 9, "imag": 9, "been": 9, "calcul": 9, "highli": 9, "constrain": 9, "robust": 9, "fast": 9, "experiment": 9, "isn": 9, "cannot": 9, "deliv": 9, "wide": 9, "rang": [9, 29], "exist": [9, 29], "littl": 9, "effort": 9, "without": 9, "setup": 9, "parti": [9, 29], "interfac": 9, "oss": 9, "greater": [9, 29], "sdk": 9, "toolchain": 9, "due": 9, "unifi": [9, 29], "microcontrol": 9, "gain": 9, "inspect": 9, "design": 9, "problem": 9, "face": 9, "lack": 9, "debugg": 9, "themselv": 9, "abl": 9, "fail": [9, 29], "eas": 9, "even": 9, "architectur": 9, "techniqu": 9, "storag": 9, "trade": 9, "off": 9, "registr": 9, "bare": 9, "metal": 9, "conv": [9, 29], "highlight": [9, 32], "advantag": 9, "categori": 9, "choic": 9, "titl": 11, "restructuredtext": 16, "expand": 16, "contribut": 16, "myst": 16, "parser": 16, "similarli": 16, "warn": [16, 29], "syntax": 16, "width": 16, "align": [16, 29], "_static": 16, "img": 16, "png": 16, "s_demo_note_sourc": 16, "alt": 16, "bg": 16, "primari": 16, "150px": 16, "center": 16, "caption": 16, "my": 16, "emphas": 16, "lineno": 16, "between": [16, 29], "marker": 16, "literalinclud": 16, "sampl": 16, "person": 16, "ag": 16, "introduc": [16, 29], "hello": 16, "am": 16, "year": 16, "old": 16, "alic": 16, "25": 16, "rst": 18, "download": [29, 30, 32], "angela": 29, "yi": 29, "googl": 29, "colab": 29, "q": 29, "condacolab": 29, "sure": 29, "privat": 29, "http": [29, 30], "github_usernam": 29, "token": 29, "undergo": 29, "longer": 29, "pleas": 29, "issu": 29, "capture_pre_autograd_graph": 29, "posit": 29, "keyword": 29, "conv2d": 29, "in_channel": 29, "out_channel": 29, "16": 29, "kernel_s": 29, "pad": 29, "example_arg": 29, "256": 29, "pre_autograd_aten_dialect": 29, "pre": 29, "aten_dialect": 29, "fx_pytre": 29, "tree_flatten_spec": 29, "_in_spec": 29, "conv2d_default": 29, "pytre": 29, "tree_unflatten": 29, "_out_spec": 29, "info": 29, "print_read": 29, "f32": 29, "arg2_1": 29, "doc": 29, "tutorials_sourc": 29, "82": 29, "83": 29, "signatur": 29, "exportgraphsignatur": 29, "user_input": 29, "user_output": 29, "inputs_to_paramet": 29, "inputs_to_buff": 29, "buffers_to_mut": 29, "backward_signatur": 29, "assertion_dep_token": 29, "doe": 29, "furthermor": 29, "3000": 29, "cleaner": 29, "pure": 29, "side": 29, "effect": 29, "mutat": 29, "alias": 29, "180": 29, "stacktrac": 29, "By": 29, "assum": 29, "than": 29, "error": 29, "traceback": 29, "tb": 29, "correctli": [29, 32], "print_exc": 29, "recent": 29, "last": 29, "146": 29, "opt": 29, "env": 29, "py_3": 29, "lib": 29, "site": 29, "367": 29, "__call__": 29, "_check_input_constraint": 29, "ordered_param": 29, "ordered_buff": 29, "553": 29, "_assertion_graph": 29, "726": 29, "call_wrap": 29, "_wrapped_cal": 29, "305": 29, "292": 29, "obj": 29, "misc": 29, "1519": 29, "_wrapped_call_impl": 29, "_call_impl": 29, "1528": 29, "forward_cal": 29, "eval_with_kei": 29, "34": 29, "11": 29, "_assert_async": 29, "msg": 29, "scalar_tensor": 29, "498": 29, "runtimeerror": 29, "dynamic_dim": 29, "dimens": 29, "less": 29, "s0": 29, "158": 29, "rangeconstraint": 29, "min_val": 29, "max_val": 29, "s1": 29, "9223372036854775806": 29, "inputdim": 29, "input_nam": 29, "dim": 29, "let": 29, "violat": 29, "15": 29, "198": 29, "68": 29, "20": 29, "_assert_async_3": 29, "scalar_tensor_3": 29, "204": 29, "73": 29, "As": 29, "entir": 29, "best": 29, "compar": 29, "prepare_pt2": 29, "compare_pt2": 29, "prepare_fx": 29, "convert_fx": 29, "annot": 29, "properli": 29, "ao": 29, "quantize_pt2": 29, "convert_pt2": 29, "xnnpack_quant": 29, "get_symmetric_quantization_config": 29, "xnnpackquant": 29, "set_glob": 29, "prepared_graph": 29, "converted_graph": 29, "observ": 29, "1220": 29, "userwarn": 29, "calculate_qparam": 29, "scale": 29, "zero": 29, "339": 29, "quantize_per_tensor": 29, "i8": 29, "quantized_decompos": 29, "128": 29, "127": 29, "int8": 29, "dequantize_per_tensor": 29, "quantize_per_tensor_1": 29, "dequantize_per_tensor_1": 29, "quantize_per_tensor_2": 29, "dequantize_per_tensor_2": 29, "next": 29, "server": 29, "edgeprogrammanag": 29, "aten_convolution_default": 29, "executorch_exir_dialects_edge__ops_aten_convolution_default": 29, "aten_relu_default": 29, "executorch_exir_dialects_edge__ops_aten_relu_default": 29, "structur": 29, "combin": 29, "encod": 29, "decod": 29, "encode_arg": 29, "aten_encod": 29, "decode_arg": 29, "aten_decod": 29, "307": 29, "aten_randn_default": 29, "executorch_exir_dialects_edge__ops_aten_randn_default": 29, "pin_memori": 29, "aten_permute_copy_default": 29, "executorch_exir_dialects_edge__ops_aten_permute_copy_default": 29, "aten_mm_default": 29, "executorch_exir_dialects_edge__ops_aten_mm_default": 29, "303": 29, "depth": 29, "valid": 29, "thing": 29, "rather": 29, "exir_op": 29, "pass_bas": 29, "convertrelutosigmoid": 29, "sigmoid": 29, "transformed_edge_program": 29, "aten_sigmoid_default": 29, "executorch_exir_dialects_edge__ops_aten_sigmoid_default": 29, "parit": 29, "lowerablemodul": 29, "to_be_lowered_modul": 29, "noqa": 29, "processed_byt": 29, "original_modul": 29, "numel": 29, "float32": 29, "395": 29, "aten_sin_default": 29, "executorch_exir_dialects_edge__ops_aten_sin_default": 29, "_pytre": 29, "540": 29, "pytree_to_str": 29, "deprec": 29, "treespec_dump": 29, "tell": 29, "notlowerablemodul": 29, "composedmodul": 29, "lowered_module_0": 29, "lowered_backend_modul": 29, "261": 29, "executorch_call_deleg": 29, "lowered_module_1": 29, "executorch_call_delegate_1": 29, "450": 29, "executorch_exir_dialects_edge__ops_aten_add_tensor": 29, "_tensor_constant0": 29, "previous": 29, "mm": 29, "delegated_program": 29, "496": 29, "497": 29, "aten_sub_tensor": 29, "executorch_exir_dialects_edge__ops_aten_sub_tensor": 29, "499": 29, "aten_mm_default_1": 29, "500": 29, "getitem_1": 29, "cohes": 29, "532": 29, "choos": 29, "executorchprogrammanag": 29, "memoryplanningpass": 29, "executorch_program": 29, "memory_planning_pass": 29, "greedi": 29, "executorch_exir_memory_alloc": 29, "530": 29, "alloc_1": 29, "531": 29, "alloc_2": 29, "alloc_3": 29, "533": 29, "alloc_4": 29, "534": 29, "prealloac": 29, "store": 29, "planner": 29, "lifetim": 29, "analysi": 29, "rand": [29, 32], "clamp": 29, "min": 29, "max": 29, "custombackendquant": 29, "custombackendpartition": 29, "went": 29, "over": 29, "total": [29, 31, 32], "minut": [29, 32], "907": [29, 31], "second": [29, 32], "jupyt": [29, 30, 32], "notebook": [29, 30, 32], "ipynb": [29, 32], "galleri": [29, 30, 32], "sphinx": [29, 30, 32], "org": 30, "template_tutori": [30, 31, 32], "html": [30, 32], "tutorials_python": 30, "zip": 30, "tutorials_jupyt": 30, "06": 31, "016": 31, "04": 31, "mb": 31, "01": 31, "109": [31, 32], "firstnam": 32, "lastnam": 32, "item": 32, "v2": 32, "gpu": 32, "video": 32, "gallery_pattern": 32, "respect": 32, "regular": 32, "neural_style_transfer_tutori": 32, "_build": 32, "beginner_sourc": 32, "verifi": 32, "why": 32, "relev": 32, "paper": 32, "automat": 32, "1910": 32, "7647": 32, "2341": 32, "8224": 32, "6457": 32, "9410": 32, "6586": 32, "9396": 32, "2016": 32, "0071": 32, "2056": 32, "6935": 32, "2303": 32, "3398": 32, "5544": 32, "knowledg": 32, "nlp": 32, "scratch": 32, "summar": 32, "takeawai": 32, "link1": 32, "link2": 32}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"custom": [0, 14, 17, 21], "compil": [0, 6, 20], "pass": [0, 2, 29], "partition": 0, "level": [0, 6], "1": [0, 4], "One": 0, "x": 0, "none": 0, "util": 0, "local": 0, "inform": 0, "2": [0, 4], "3": [0, 4], "manag": 0, "subgraph": 0, "matcher": 0, "capabl": 0, "base": 0, "combin": 0, "sourc": [0, 6], "backend": [1, 19, 29], "deleg": [1, 4, 19, 27, 29], "interfac": [1, 4], "ahead": 1, "time": [1, 31], "preprocess": 1, "runtim": [1, 4, 6, 7, 18, 22, 23], "initi": 1, "execut": [1, 6], "error": [1, 22], "messag": 1, "common": 1, "question": 1, "kernel": [2, 14, 15], "fusion": 2, "memori": [3, 21, 29], "plan": [3, 29], "an": 4, "end": 4, "exampl": [4, 8], "lower": [4, 29], "model": [4, 29], "frontend": 4, "flow": 4, "whole": [4, 29], "modul": [4, 29], "composit": 4, "partit": [4, 29], "export": [5, 6, 29], "executorch": [5, 6, 7, 8, 9, 10, 29], "high": [6, 12], "architectur": 6, "compon": 6, "overview": [6, 10, 15, 23, 32], "program": [6, 7], "prepar": 6, "code": [6, 16, 29], "edg": [6, 29], "sdk": 6, "set": 7, "up": 7, "your": 7, "environ": 7, "gener": 7, "sampl": 7, "build": [7, 20], "run": [7, 29], "next": 7, "step": [7, 32], "welcom": 8, "document": 8, "get": 8, "start": 8, "tutori": [8, 29, 30, 32], "how": 9, "doe": 9, "work": 9, "kei": 9, "benefit": 9, "exir": 11, "order": 12, "oper": 12, "opset": 13, "definit": 13, "aten": 14, "compliant": 14, "implement": [14, 19], "link": [14, 19, 29], "librari": 15, "markdown": 16, "sphinx": 16, "tip": 16, "trick": 16, "admonit": 16, "imag": 16, "block": 16, "quantiz": [17, 29], "api": 18, "cross": 20, "alloc": 21, "handl": 22, "platform": 24, "abstract": 24, "layer": 24, "bundledio": 25, "debug": 26, "integr": 27, "profil": 28, "prerequisit": 29, "express": 29, "dynam": 29, "address": 29, "untrac": 29, "perform": 29, "dialect": 29, "compos": 29, "anoth": 29, "part": 29, "user": 29, "defin": 29, "save": 29, "file": 29, "conclus": [29, 32], "mention": 29, "comput": 31, "templat": 32, "option": 32, "addit": 32, "exercis": 32}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.todo": 2, "sphinx.ext.viewcode": 1, "sphinx.ext.intersphinx": 1, "sphinx": 56}})