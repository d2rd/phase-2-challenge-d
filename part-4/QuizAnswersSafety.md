Challenge D
## Part 4: Quiz time!
Q1: When you run a command in the terminal, where does BASH look for that command?
  A: Bash looks for commands in the default path which is stored in the $PATH environment variable.
 
Q2: On a UNIX computer, how do you stop a running process?
  A: ^c ('control-c') stops a running process that is in focus (i.e. not running in the background). Some apps require, like node.js require you hit ^c twice to quit.
 
Q3: What packages do you have installed via homebrew?
  A: git, icu4c, openssl, readline
httrack, mysql, openssl@1.1, wget
hub, node, postgresql

 
Q4: On a UNIX computer, how do you find the process id of a running process?
  A: `pgrep + program name` will display the process id.  I also researched `pidof`. However, a quick test for this question using `pidof firefox`. threw the error `bash: pidof: command not found` whereas `pgrep firefox` display `356`.
 
Q5: In a terminal, what does control-c do?
  A: `control-c` (`^c`) stops the current process.
 
Q6: In a terminal, what does control-a do?
  A: Ctrl-a places the cursor at the beginning of the command line.
 
Q7: In a terminal, what does control-e do?
  A: Ctrl-e places the cursor at the end of the command line.
 
Q8: What keyboard shortcut do you use to split the screen in your editor?
  A: In VS Code Cmd-\ (command+\) splits the editor window into an additional pane.
 
Q8: What keyboard shortcut do you use to split the screen in your terminal?
A: I use VS Code.  Control-` (control+backtick) opens the built-in terminal window.  A ‘+’ icon adds additional terminal windows and a selector allows me to choose which terminal session I want to view.
 
Q9:  When a terminal command completes, how can you tell if it was successful or not?
  A: It depends on the command and program. In general, the absence of an error message and return to the `$` prompt indicates success. In the case of node.js the running program returns `>` (greater than sign) as a prompt. In the case of postgreSQL nothing is returned so you're okay.
 
Q10:  What does your ~/.gitconfig have in it? (paste the whole file here)
A:  D2rdMac:/ d2rd$ git config --list
credential.helper=osxkeychain
color.ui=auto
user.name=Glenn-David Daniel
user.email=d2rd@outlook.com
D2rdMac:/ d2rd$
Q11:  What is the difference between a relative and absolute path?
A:  Relative path references its top level as the present working directory.
Absolute paths reference from the root directory.
Relative paths reference from the root of the project (application) folder.  Absolute paths reference from the root directory or users home directory.
 Q:  What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?
Q:  What files or folders do you want all git repositories to ignore?
Q:  What is the main difference between == and === in JavaScript?
 
 
 
 
 
 
 
 
 














 


 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 



Lets say you have the following file structure
~
└── Projects
    ├── pinterest-for-dogs
    │   ├── README.md
    │   └── package.json
    └── linkedin-for-dancers
        ├── README.md
        └── package.json
And you were in the linkedin-for-dancers folder. What command would you use to change folders to the pinterest-for-dogs folder?





