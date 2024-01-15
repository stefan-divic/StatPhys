Search.setIndex({"docnames": ["Coin-flipping", "Course-Info-211-2024", "L1 coin flipping", "intro"], "filenames": ["Coin-flipping.ipynb", "Course-Info-211-2024.md", "L1 coin flipping.md", "intro.md"], "titles": ["Probability and information entropy", "Course Information", "Coin flipping  <span class=\"math notranslate nohighlight\">\\(N\\)</span> times", "Lecture Notes on Equilibrium Statistical Mechanics (Physics 211)"], "terms": {"when": [0, 2], "we": [0, 1, 2], "think": [], "about": [0, 2], "one": [0, 1, 2], "most": [0, 2], "basic": [], "question": [0, 1, 2], "how": [], "grow": [0, 2], "over": [0, 2], "time": [0, 3], "from": [0, 1, 2, 3], "singl": 0, "cell": [], "determinist": [0, 2], "expect": [0, 1], "growth": [], "occur": [], "produc": [], "more": [1, 2], "itself": [], "befor": 1, "di": [], "The": [0, 1, 2, 3], "number": [0, 2], "offspr": [], "famou": [], "r_0": [], "context": [0, 2], "epidemiolog": [], "ha": [0, 1, 2], "larger": [], "than": [1, 2], "although": [], "teproduct": [], "death": [], "rate": [], "gener": [0, 2], "depend": [0, 2], "ag": [], "mani": [0, 2], "have": [0, 1, 2, 3], "alreadi": [], "been": [], "lot": 1, "us": [0, 1, 2], "insight": [], "can": [0, 1], "gain": [], "ignor": [], "ani": 1, "memori": [], "birth": [], "exce": [], "b": [0, 1, 2], "In": [0, 2], "fact": [], "excercis": [0, 2], "show": 0, "give": 0, "case": 1, "ar": [0, 1, 2, 3], "similar": [], "exampl": [0, 2], "an": [0, 1], "epidem": [], "situat": [], "where": [0, 2], "1": [0, 2, 3], "slightli": 0, "benefici": [], "mutat": [], "slowli": [], "spread": 2, "critic": [], "obviou": [], "whether": [], "rather": 0, "goe": [], "extinct": [], "chanc": [], "what": [0, 2], "might": [], "n": 0, "A": [0, 2, 3], "veri": [0, 2], "nice": 1, "present": [], "kei": [0, 2], "featur": [], "found": [], "refer": 1, "df07": [], "To": [1, 2], "answer": 1, "thi": [0, 1, 2, 3], "let": [0, 1], "s": [0, 1, 2, 3], "first": [0, 2, 3], "focu": [], "u": [], "t": [1, 2], "tau": [], "individu": [], "leav": [], "some": [], "descend": [], "suppos": [], "know": 1, "would": [], "like": [0, 1], "estim": [], "epsilon": [], "i": [0, 1, 2], "e": [0, 1, 2], "push": [], "initi": [], "condit": [], "further": 1, "back": [], "Then": [], "slice": [], "suffici": [], "small": [], "onli": 0, "consid": [], "two": 1, "possibl": [0, 2], "event": [], "doubl": [], "order": 1, "2": [0, 2, 3], "thu": [0, 2], "left": [0, 2], "right": [0, 2], "here": [0, 1, 2], "term": [], "hand": [], "side": [], "simpli": [], "sai": 0, "within": [], "span": [], "remain": [], "unchang": [], "partial_": [], "notic": [0, 2], "thei": [0, 2], "evalu": [], "For": [0, 1, 2], "simplic": [], "assum": [0, 2], "rel": [], "differ": [0, 2], "equiv": [0, 2], "ll1": [], "constant": [0, 2], "If": [0, 1, 2], "measur": [0, 2], "obtain": [0, 2], "result": 1, "equat": [], "logist": [], "differenti": [], "seemingli": [], "non": [], "linear": [0, 2], "reveal": [], "its": 1, "natur": [0, 1, 2], "after": [], "follow": [0, 1, 3], "substitut": [], "frac": [0, 2], "q": [0, 2], "upon": [], "which": [0, 1, 2, 3], "fraction": [], "solut": 1, "note": [1, 2], "our": [0, 2], "final": 1, "provid": [1, 3], "long": [], "super": [], "given": [0, 2], "between": [0, 1, 2], "import": [0, 3], "numpi": 0, "np": 0, "matplotlib": 0, "pyplot": 0, "plt": 0, "allow": [], "tex": [], "rcparam": [], "text": [0, 1, 2], "usetex": [], "true": 0, "figur": 0, "dpi": [], "100": 0, "0": [0, 2], "tmax": [], "10": 1, "linspac": 0, "start": [], "stop": [], "num": [], "y": 0, "exp": [], "add": [], "titl": 0, "axi": 0, "name": [], "r": 0, "select": [], "advantag": [], "xlabel": 0, "ylabel": 0, "hline": [], "xmin": [], "xmax": [], "color": 0, "purpl": [], "linestyl": 0, "lw": [], "label": 0, "plot": 0, "moment": [0, 2], "partial_t": [], "langl": [0, 2], "rangl": [0, 2], "clear": [], "abund": [], "function": 0, "simpl": [0, 2], "exponenti": [], "st": [], "averag": [], "But": [0, 1, 2], "now": [0, 2], "also": [0, 1, 2], "predict": [], "becaus": [], "geq1": [], "30": [0, 1], "yapprox": [], "yscale": [], "log": [0, 2], "dash": 0, "asymptot": [], "look": [0, 2], "prolifer": [], "begin": [0, 1, 2], "earlier": [], "due": 1, "acceler": [], "much": [], "faster": [], "run": 1, "awai": [], "absorb": [], "boundari": 0, "compar": [0, 2], "random": [0, 2], "def": 0, "simulate_branching_process": [], "replic": [], "time_period": [], "population_s": [], "_": [0, 2], "rang": 0, "particl": [1, 3], "while": [], "new_population_s": [], "poisson": [], "append": [], "return": [0, 1], "50": [], "time_point": [], "list": 1, "enumer": [], "black": 0, "linewidth": 0, "3": [0, 1, 3], "clearli": [], "captur": [], "coars": [], "fluctuat": [], "around": [], "even": 0, "larg": [0, 2], "far": [], "deriv": [], "do": 1, "full": [], "p_n": [], "consist": [], "turn": 1, "out": [], "g_x": [], "sum_": [0, 2], "infti": [0, 2], "x": [0, 2], "satisfi": [], "retrac": [], "step": [0, 2], "abov": 1, "deduc": [], "explain": 1, "last": [], "rh": [], "just": [0, 2], "squar": [], "m": 1, "z": [], "p_m": [], "p_": [], "second": 0, "defin": [0, 2], "continu": [], "limit": [0, 2], "rescal": [], "find": [0, 1], "special": [1, 3], "correspond": [], "solv": 1, "again": [], "subject": [1, 3], "leq": [], "indic": [], "radiu": [], "converg": [], "yield": [], "power": [], "seri": [0, 2], "expans": [], "sought": [], "arrai": [0, 2], "cc": [], "geq": [], "end": [0, 2], "p_0": [], "sinc": [0, 2], "quit": [], "broad": [], "characterist": [], "mean": 3, "partial_x": [], "saniti": [], "check": [], "comput": [0, 1, 2, 3], "quantiti": [0, 2], "particularli": [], "relev": [1, 3], "ll": 1, "establish": [], "pr": [], "sim": 2, "ns": [], "better": [], "interpret": [], "express": 0, "delta": 2, "effect": [0, 2], "delai": [], "period": [], "7": [0, 3], "impli": [], "univers": [0, 1, 2, 3], "extrem": [], "valu": 0, "propto": [0, 2], "gumbel": [], "150": [], "gumbeldistribut": [], "bhk18": [], "gabriel": [], "birzu": [], "oskar": [1, 3], "hallatschek": [1, 3], "kiril": [], "korolev": [], "uncov": [], "distinct": [], "class": [1, 3], "travel": [], "wave": [], "proceed": [], "nation": [], "academi": [], "scienc": 1, "115": [], "16": [], "e3645": [], "e3654": [], "2018": [], "michael": [], "desai": [], "daniel": [], "fisher": [], "balanc": [], "linkag": [], "posit": [], "genet": [], "176": [], "1759": [], "1798": [], "2007": [], "hal11": [], "noisi": [], "edg": [], "108": [], "5": [0, 1, 3], "1783": [], "1787": [], "2011": [], "hg16": [], "luka": [], "geyrhof": [], "collect": [0, 2], "dynam": 3, "adapt": 3, "other": [], "202": [], "1201": [], "1227": [], "2016": [], "you": 1, "write": [], "your": 1, "book": [], "content": [], "jupyt": [], "notebook": [], "ipynb": [], "regular": [], "md": [], "same": [0, 2], "flavor": [], "call": [0, 2], "help": [], "get": 0, "off": [], "syntax": [], "stand": [], "markedli": [], "structur": 3, "It": 0, "slight": [], "variat": [], "commonmark": [], "extens": [0, 2, 3], "sphinx": [], "ecosystem": [], "see": [], "overview": 3, "tool": [], "kind": [], "written": 0, "markup": [], "languag": [], "both": [0, 1], "serv": [], "purpos": [], "line": [], "wherea": [], "accept": 1, "input": [], "those": 1, "specif": [0, 2], "being": [], "render": [], "box": [], "build": 1, "inlin": [], "document": [], "cite": 1, "store": [], "bibtex": [], "holdgraf_evidence_2014": [], "moreov": [], "insert": [], "bibliographi": [], "page": 1, "must": 1, "all": [0, 1, 2], "properli": [], "bib": [], "starter": [], "jupyterbook": [], "org": 1, "understand": [0, 2], "stochast": [], "emb": [], "space": [], "simplest": [], "imagin": [], "each": [0, 1], "mere": [], "diffus": [], "along": [], "without": 1, "activ": 3, "motion": [], "certain": [0, 2], "direct": [], "observ": [0, 2], "densiti": 0, "Of": 2, "particular": [0, 2], "interest": 1, "shape": [], "advanc": 3, "part": [], "expand": [0, 2], "frontier": [], "These": [0, 2], "front": [], "quantit": [], "model": 0, "outbreak": [], "evolutionari": [], "below": 1, "lead": 0, "behavior": [0, 2], "treatment": [], "adhoc": [], "hopefulli": [], "illumin": [], "rigor": [], "literatur": [], "brunet": [], "derrida": [], "igor": [], "kessler": [], "onc": [], "distribut": [0, 2], "need": [0, 1, 3], "scalar": [], "field": 3, "c": [0, 2], "describ": [0, 2], "state": [0, 2], "total": 0, "size": [0, 2], "make": 1, "infinit": [], "dimension": [], "challeng": [], "still": [], "progress": [], "made": [], "absenc": [], "bulk": [], "bound": [0, 2], "howev": 3, "matter": 3, "realist": [], "descript": [0, 2], "entir": [0, 2], "theori": [1, 3], "well": [], "mix": [], "net": [], "wai": [], "law": [], "appli": [], "local": [], "conserv": [], "mathemat": [], "j": [0, 1, 2], "site": [], "diverg": [], "current": 3, "repres": [0, 2], "decreas": [], "increas": [], "henc": [], "minu": 0, "sign": [], "proport": [], "gradient": [], "d": 1, "high": [], "low": [0, 2], "region": [], "ansatz": [], "grain": [], "carri": [], "unbias": [], "short": [], "seem": [], "strong": [], "assumpt": [0, 2], "mai": 1, "introduc": [0, 2], "jump": [], "kernal": [], "k": 0, "formul": [], "int_": [], "approxim": [0, 1], "accur": [], "length": 0, "scale": [0, 2], "kernel": [], "rapidli": [], "decai": [], "distanc": [], "reaction": [], "so": [0, 2], "levi": [], "flight": [], "With": [], "finit": 0, "strongli": [], "presenc": [], "nois": [], "slide": [], "strictli": [], "easili": [], "ensu": [], "psi": [], "rid": [], "widen": [], "gaussian": [], "2d": [], "read": [0, 1, 2], "4dt": [], "4": [0, 2, 3], "pi": [], "dt": [], "peak": [], "tail": [0, 2], "extend": [], "infin": [], "real": [], "instead": [0, 2], "try": [], "ask": [], "At": [], "drop": 1, "threshold": [], "should": 1, "ell": [], "v_f": [], "kolmogorov": [], "veloc": [], "sqrt": 2, "ds": [], "By": [0, 2], "There": [1, 2], "alwai": [0, 2], "correct": [], "whose": [], "exactli": [], "8": 0, "unrealist": [], "re": [], "ck": [], "under": [], "develop": [], "relax": [], "steadili": [], "move": [], "train": [], "co": [], "frame": [], "profil": [], "becom": [], "steadi": [], "v": 2, "version": 1, "admit": [], "quadrat": [], "equal": [], "realiz": 2, "requir": [], "thought": [], "easi": [], "map": [0, 2], "obvious": [], "ad": [], "neg": 0, "cannot": [0, 2, 3], "therefor": [], "conclud": [], "classic": [], "inde": [], "care": [0, 2], "analysi": [], "compact": [], "support": [], "roll": [], "ball": [], "analog": [], "pull": [], "largest": [], "fig": [], "down": [0, 2], "hill": [], "onto": [], "plane": [], "recent": [], "discov": [], "semi": [], "reduc": [], "sketch": [], "xb": [], "through": [], "vallei": [], "lower": [], "lai": [], "discuss": [1, 3], "sens": [], "exist": [], "crucial": [], "influenc": 3, "One": 2, "form": [], "eta": [], "uncorrel": [0, 2], "white": [], "9": 1, "amount": [], "problemat": [], "singular": [], "perturb": [], "seriou": [], "genealog": [], "work": 1, "done": [], "implement": [], "them": [], "level": [0, 2, 3], "recip": [], "method": [], "process": [], "concept": [0, 2, 3], "coeffici": [], "paramet": [0, 1], "l": [0, 2], "domain": [], "20": 1, "dx": [], "spatial": [0, 2], "01": [], "sigma0": [], "width": [], "n0": [], "cummul": [], "calcul": [], "tempor": [], "int": [], "matrix": [], "zero": 0, "set": [0, 1, 2], "sin": [], "meshgrid": [], "ax": [], "add_subplot": [], "111": [], "project": [], "3d": [], "plot_surfac": [], "cmap": [], "viridi": [], "set_xlabel": [], "set_ylabel": [], "set_zlabel": [], "modifi": [], "chatgpt": [], "gave": [], "me": 1, "python": 1, "sine": [], "iter": [], "surfac": [], "pleas": 1, "handl": [], "optim": [], "experi": 1, "take": 1, "account": [], "difficult": [], "forward": [], "rise": [], "tree": [], "happen": [0, 1, 2], "lineag": [], "split": [], "downstream": [], "fulli": 0, "probabilist": 3, "That": [], "attempt": [], "feasibl": [], "often": [], "imposs": 1, "bodi": [], "simpler": [], "retrospect": [], "view": [], "sampl": 0, "backward": [], "neither": [], "nor": [], "deal": [], "degre": [0, 2], "freedom": [0, 2], "enforc": [], "concret": [], "ancestr": [], "said": [], "probabl": [2, 3], "g": 1, "xi": [], "locat": [], "ancestor": [], "live": 1, "choos": [], "toward": [], "past": [], "trajectori": [], "respect": [], "convent": [], "ordin": [], "greek": [], "letter": [], "point": 0, "roman": [], "movement": [], "less": [], "bias": [0, 2], "green": [], "pdf": 0, "ensur": [], "somewher": [], "d_": [], "v_": [], "bia": [], "ln": [0, 2], "vanish": 0, "common": [], "pre": [0, 2], "factor": [0, 2], "fix": [0, 2], "normal": [], "everywher": [], "normaliz": [], "bell": [], "g_": [], "sigmoid": [], "vari": [], "capac": [], "anoth": [0, 1, 2], "hint": [], "incorrect": [], "complet": [], "appropri": 1, "viewpoint": [], "go": [], "nearli": [], "surviv": [], "arriv": [], "conclus": [], "exercis": [], "addit": 3, "12": 0, "close": [], "Such": [], "connect": 1, "recogn": [], "13": [], "futur": [], "forev": [], "combin": [], "eq": [], "int_x": [], "third": [], "furnish": [], "major": [], "approach": [0, 2], "sight": [], "amplif": [], "overal": [], "cut": [], "x_c": [], "beyond": [], "induc": [], "cutoff": [], "conveni": [], "variabl": [], "transform": [], "phi": [], "vx": [], "15": [], "4d": [], "hermitian": [], "oper": [], "17": [], "schroeding": [], "imaginari": [], "origin": [], "14": [], "o": [0, 2], "mode": [], "demand": [], "ground": [], "lowest": 1, "energi": [0, 2], "higher": [0, 2], "node": [], "eigen": [], "essenti": [], "spectrum": [], "1d": [0, 2], "cosin": [], "phi_0": [], "reduct": [], "strength": [], "pronounc": 0, "detail": [], "argu": [], "intuit": [], "caus": [], "coalesc": [], "t_c": [], "trait": [], "height": [], "etc": [], "across": [], "shift": 1, "respons": [], "chang": 1, "environ": [], "organ": [], "occurr": [], "fitter": [], "c_n": [], "c_": [], "overlin": [], "f_n": [], "sum_n": [], "argument": [], "constrain": [], "multipli": [], "18": [], "integr": [], "lh": [], "sigma": [0, 2], "stumbl": [], "he": [1, 3], "wa": [], "appar": [], "excit": [], "fundament": [0, 2, 3], "soon": [], "shown": [], "good": 1, "next": [], "bin": 0, "qs": [], "approx": [0, 2], "weight": 1, "yet": 3, "logarithm": [], "accord": [], "base": [], "new": [], "aris": [], "wrong": [], "noisestrength": [], "001": [], "slower": [], "sequenti": [], "neglect": [], "why": [0, 2], "prefer": [], "xxx": [], "emerg": [0, 1, 2], "yyi": [], "uncontrol": [], "primari": 1, "reason": 3, "contrast": [0, 2], "usual": [0, 1, 2], "flaw": [], "domin": [], "rescu": [], "come": [], "actual": [], "prevent": [], "uneasi": [], "exact": [], "except": [0, 2], "integ": [], "narrow": [], "corridor": [], "w": 1, "wall": [], "involv": [], "standard": [], "quantum": 3, "mechan": 1, "tunnel": [], "defect": [], "brief": 3, "summari": [], "four": [], "week": 1, "2023": [], "le": [], "houch": [], "workshop": [], "broadli": [], "concern": [], "constantli": [], "equilibrium": [], "inject": [], "engin": [], "convert": [], "avail": 1, "chemic": [], "free": 0, "motor": [], "janu": [], "actuat": [], "light": [], "type": [], "break": [], "revers": [], "symmetri": [], "flipsid": [], "hallmark": [], "life": [], "consequ": 2, "fuel": [], "introduct": [], "pam": [], "pattern": [], "toi": [], "could": [], "armchair": [], "later": 0, "realism": [], "somewhat": [], "physic": [0, 2], "soft": [], "system": [0, 2], "few": [], "biolgic": [], "reader": [], "encourag": 3, "inspir": [], "thy": [], "amaz": [], "laps": [], "movi": [], "wim": [], "van": [], "egmond": [], "branch": [], "OF": [1, 3], "california": [1, 3], "berkelei": [1, 3], "depart": [1, 3], "instructor": [1, 3], "prof": [1, 3], "hi": [1, 3], "offic": [1, 3], "274d": [1, 3], "stanlei": [1, 3], "hall": [1, 3], "email": [1, 3], "ohallat": [1, 3], "edu": [1, 3], "teach": [1, 3], "assist": 1, "irian": 1, "andrea": 1, "she": 1, "her": 1, "mariosdandrea": 1, "lectur": 1, "info": 1, "tu": 1, "th": 1, "00pm": 1, "room": 1, "105": 1, "north": 1, "gate": 1, "post": 1, "record": 1, "bcours": 1, "afterward": 1, "send": 1, "catch": 1, "my": [1, 3], "section": 1, "mixtur": 1, "problem": 1, "stat": [0, 1], "mech": 1, "applic": 1, "6": [0, 1, 3], "b56": 1, "hidebrand": 1, "f": [0, 1], "59pm": 1, "109": 1, "dwinel": 1, "hour": 1, "h": 1, "00": 1, "tbd": [1, 3], "deadlin": 1, "feb": 1, "cours": [2, 3], "webpag": 1, "prerequisit": [1, 3], "112": 1, "137a": 1, "equival": [0, 1], "kardar": [0, 1, 2, 3], "paper": 1, "copi": 1, "uc": 1, "librari": 1, "onlin": 1, "resourc": 1, "arova": [0, 1, 3], "thermodynam": [0, 1, 2, 3], "dan": 1, "ucsd": 1, "phy": 1, "libretext": 1, "sethna": 1, "entropi": [1, 2, 3], "complex": 1, "2nd": 1, "edit": 1, "http": [], "lassp": [], "cornel": [], "statmech": [], "mackai": [1, 3], "inform": 3, "guidelin": 1, "chapter": 1, "exam": 1, "grade": 1, "midterm": 1, "24": 1, "home": 1, "date": 1, "tue": 1, "mar": 1, "fri": 1, "7pm": 1, "9pm": 1, "determin": [1, 3], "element": 1, "40": 1, "homework": 1, "extra": 1, "credit": 1, "particip": 1, "weekli": 1, "fridai": 1, "via": [1, 3], "gradescop": 1, "late": 1, "miss": 1, "polici": 1, "score": 1, "unless": 1, "extenu": 1, "circumst": 1, "sick": 1, "famili": 1, "desast": 1, "accid": 1, "prep": 1, "march": 1, "meet": 1, "ill": 1, "unabl": 1, "conflict": 1, "least": 1, "accommod": 1, "disabl": 1, "relat": 1, "medic": 1, "wish": 1, "share": 1, "arrang": 1, "evacu": 1, "campu": 1, "immedi": 1, "moral": 1, "compass": 1, "collabor": 1, "independ": [1, 3], "reflect": 1, "togeth": 1, "feel": 1, "comfort": 1, "abil": 1, "blackboard": 1, "cheat": 1, "anyon": [0, 1, 2], "caught": 1, "receiv": 1, "fail": 1, "prob": 1, "lem": 1, "report": 1, "center": 1, "student": [1, 3], "conduct": 1, "plagiar": 1, "idea": 1, "sourc": [1, 3], "assign": 1, "disciplinari": 1, "action": 1, "includ": 1, "print": 1, "publish": 1, "unpublish": 1, "translat": 1, "grad": 1, "school": 1, "don": 1, "practic": 1, "thing": 1, "provis": 1, "sheet": 1, "discret": 1, "address": 1, "improv": 1, "smooth": 1, "211": [], "statist": [0, 2], "spring": 3, "2024": 3, "1000": [], "sequenc": 0, "head": [0, 2], "coin_flip": [], "choic": 0, "sum": [0, 2], "sigma_j": 0, "figsiz": 0, "cumsum": 0, "cumul": 0, "legend": 0, "histogram": 0, "total_sum": [], "hist": 0, "edgecolor": 0, "frequenc": 0, "doca": [], "coin": [], "flip": [], "agenda": [0, 2], "microst": [0, 2], "vs": 0, "macrost": 0, "clt": [0, 2], "recap": [0, 2], "ch": [0, 2], "repeat": [0, 2], "outcom": [0, 2], "warm": 0, "up": 0, "illustr": [0, 2], "configur": [0, 2], "magnet": [0, 2], "spin": [0, 2], "walk": [0, 2], "polym": [0, 2], "freeli": [0, 2], "joint": [0, 2], "chain": [0, 2], "volum": [0, 2], "sigma_": [0, 2], "p": [0, 2], "quad": [0, 2], "cdot": [0, 2], "delta_": [0, 2], "sometim": [0, 2], "align": [0, 2], "ldot": [0, 2], "prod_": [0, 2], "doe": [0, 2], "realm": [0, 2], "plai": [0, 2], "pivot": [0, 2], "role": [0, 2], "transit": [0, 2], "microscop": [0, 2], "macroscop": [0, 2], "denot": [0, 2], "micro": [0, 2], "encompass": [0, 2], "directli": [0, 2], "typic": [0, 2], "instanc": [0, 2], "n_": [0, 2], "likewis": [0, 2], "stare": [0, 2], "brain": [0, 2], "tend": [0, 2], "quickli": [0, 2], "mismatch": [0, 2], "rightarrow": [0, 2], "known": [0, 2], "macro": [0, 2], "object": [0, 2], "dure": [0, 2], "aspect": [0, 2], "explor": [0, 2, 3], "product": [0, 2], "binom": [0, 2], "aka": [0, 2], "binomi": [0, 2], "underbrac": [0, 2], "compet": [0, 2], "stirl": [0, 2], "linearli": [0, 2], "intens": [0, 2], "quanitit": [0, 2], "competit": [0, 2], "creat": 0, "400": 0, "avoid": 0, "divis": 0, "adjust": 0, "clip": 0, "999999": 0, "y_e": 0, "y_sum": 0, "dot": 0, "pq": [0, 2], "Their": 0, "grid": 0, "maximum": 0, "neutral": 0, "probab": [0, 2], "convex": 0, "minimum": 0, "depict": 0, "impress": 0, "modestli": 0, "taylor": [0, 2], "enter": 0, "10000": 0, "biased_coin_flip": 0, "biased_total_sum": 0, "scipi": 0, "theoret": 0, "success": 0, "pmf": 0, "2k": 0, "accordingli": 0, "theoretical_prob": 0, "scaled_sum": 0, "empir": 0, "red": 0, "marker": 0, "li": 2, "microct": 2, "atova": 2, "magnetis": 2, "varianc": 2, "operatornam": 2, "var": 2, "mathrm": 2, "npq": 2, "neq": 2, "prime": 2, "provelat": 2, "instruct": 2, "meant": [], "materi": 3, "want": [], "thank": 3, "mike": 3, "zalatel": 3, "dunghai": 3, "lee": 3, "partli": [], "plan": [], "roughli": [], "replac": [], "undergrad": [], "newer": [], "contemporari": [], "research": 3, "effort": [], "machin": 3, "learn": 3, "molecular": 3, "basi": [], "ensembl": 3, "interact": 3, "hamiltonian": 3, "dynamci": [], "ergod": 3, "landau": 3, "updat": 3, "syllabu": 3, "undergradu": 3, "topic": 3, "outlin": [], "design": 3, "complement": 3, "cover": 3, "invalu": 3, "partial": 3, "own": 3, "reorder": 3, "textbook": 3, "referenc": 3, "perspect": 3, "techniqu": 3, "studi": 3, "review": 3, "dedic": 3, "advis": 3, "revis": 3, "modif": 3, "aim": 3, "incorpor": 3, "As": 3, "extent": 3, "inclus": 3, "throughout": 3, "concis": 0, "principl": 0, "everyth": 0}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"branch": [], "process": [], "surviv": [], "probabl": 0, "simul": [], "appendix": [], "popul": [], "size": [], "distribut": [], "citat": [], "markdown": [], "file": [], "what": [], "myst": [], "sampl": [], "role": [], "direct": [], "learn": [], "more": [], "travel": [], "wave": [], "incorpor": [], "dispers": [], "ignor": [], "non": [], "linear": [], "includ": [], "control": [], "differ": [], "type": [], "effect": [], "discret": [], "simpl": [], "code": [], "fkpp": [], "gene": [], "surf": [], "notat": [], "random": [], "walk": [], "consequ": [], "tip": [], "fluctuat": [], "fit": [], "adapt": [], "speed": [], "depend": [], "varianc": [], "The": [], "self": [], "consist": [], "naiv": [], "expect": 2, "comment": [], "problem": [], "lectur": 3, "note": 3, "prolifer": [], "activ": [], "matter": [], "physic": [1, 3], "211": [1, 3], "equilibrium": [1, 3], "statist": [1, 3], "spring": 1, "2024": 1, "cours": 1, "inform": [0, 1], "coin": [0, 2], "flip": [0, 2], "entropi": 0, "n": 2, "time": 2, "coars": [0, 2], "grain": [0, 2], "warm": 2, "up": 2, "calcul": 2, "valu": 2, "mechan": 3}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})