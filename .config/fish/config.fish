set -x BROWSER vivaldi-stable
set -x EDITOR vim
set -x TERMINAL urxvt
set -x ttymouse xterm2

# Set the key repeat rate
xset r rate 160 60

# Silence the irritating beep
xset -b

# Silence the blind laptop screen
# xrandr --output LVDS-1 --off

# Load fishmarks (http://github.com/techwizrd/fishmarks)
. $HOME/.fishmarks/marks.fish

# start X at login
if status --is-login
    if test -z "$DISPLAY" -a $XDG_VTNR = 1
        exec startx -- -keeptty
    end
end

# For an empty fish greeting
function fish_greeting
end

# Shortcut for Systemctl commands
function sstart
    sudo systemctl start $argv
end

function sstop
    sudo systemctl stop $argv
end

function sstatus
    sudo systemctl status $argv
end

function srestart
    sudo systemctl restart $argv
end

function senable
    sudo systemctl enable $argv
end

alias n ncmpcpp
alias gac "git add -A && git commit"
alias gl "git pull"
alias gp "git push"
alias gss "git status"


# Shortcuts to start apps
function startterminology
    cd /home/kevin/Code/terminology
    . venv/bin/activate.fish
    python run.py
end

function startlighttables
    cd /home/kevin/Code/lighttables
    . venv/bin/activate.fish
    python run.py
end

function startlistino
    cd /home/kevin/Code/listino
    . venv/bin/activate.fish
    python run.py
end

function startnewfaces
    cd /home/kevin/Code/clients/matt/newfaces
    . venv/bin/activate.fish
    python run.py
end

function startlyricist
    cd /home/kevin/Code/lyricist
    . venv/bin/activate.fish
    python run.py
end

function startvisconti
    cd /home/kevin/Code/clients/matt/visconti
    . venv/bin/activate.fish
    python run.py
end

function startda
    cd /home/kevin/Code/zephony/diagonalley
    . venv/bin/activate.fish
    python run.py
end

function startjournal
    cd /home/kevin/Code/zephony/journal
    . venv/bin/activate.fish
    python run.py
end

function startbolero
    cd /home/kevin/Code/clients/matt/bolero
    . venv/bin/activate.fish
    python run.py
end

function startalibalance
    cd /home/kevin/Code/clients/matt/alibalance
    . venv/bin/activate.fish
    python run.py
end

function startoswal
    cd /home/kevin/Code/clients/cartoonmango/oswal
    . venv/bin/activate.fish
    python run.py
end

function startdash
    cd /home/kevin/Code/clients/todd/m5dashboard
    . venv/bin/activate.fish
    python run.py
end

# React Native related
set -x ANDROID_HOME $HOME/Android/Sdk
set -x PATH $PATH $ANDROID_HOME/tools
set -x PATH $PATH $ANDROID_HOME/tools/bin
set -x PATH $PATH $ANDROID_HOME/emulator
set -x PATH $PATH $ANDROID_HOME/platform-tools

