set -x BROWSER chromium
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

alias n ncmpcpp


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

function startzucumber
    cd /home/kevin/Code/portalapp1
    . venv/bin/activate.fish
    env ENV_TYPE="01" python manage.py runserver
end
