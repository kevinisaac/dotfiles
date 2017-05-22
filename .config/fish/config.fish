set -x BROWSER chromium
set -x EDITOR vim
# set -x STAGING_WRITECOPY "1"
# set -x TERMINAL gnome-terminal
set -x TERMINAL urxvt
set -x TERMINUS_DEV_CONF /home/kevin/Code/python/flask/xlate/config/development.py
set -x ttymouse xterm2
# bash ~/.local/bin/bashmarks.sh
# set -x PYTHONSTARTUP /home/kevin/Code/python/scripts/pretty_json.py

# Set the key repeat rate
xset r rate 160 60

# Silence the irritating beep
xset -b

# Silence the blind laptop screen
# xrandr --output LVDS-1 --off

function fish_greeting
#     fortune phrases vocabulary
end

# Load fishmarks (http://github.com/techwizrd/fishmarks)
. $HOME/.fishmarks/marks.fish

function startterminology
    cd /home/kevin/Code/terminology
    . venv/bin/activate.fish
    python run.py
end

function startzucumber
    cd /home/kevin/Code/zucumber
    . venv/bin/activate.fish
    python manage.py runserver
end

# start X at login
if status --is-login
    if test -z "$DISPLAY" -a $XDG_VTNR = 1
        exec startx -- -keeptty
    end
end

# . /usr/lib/python3.4/site-packages/powerline/bindings/fish/powerline-setup.fish
# powerline-setup

# Start the powerline daemon to prevent lag
# powerline-daemon -q

# Path to Oh My Fish install.
# set -gx OMF_PATH /home/kevin/.local/share/omf

# Customize Oh My Fish configuration path.
#set -gx OMF_CONFIG /home/kevin/.config/omf

# Load oh-my-fish configuration.
# source $OMF_PATH/init.fish

###########################################

# set -gx PATH "/usr/local/bin" "." "/home/kevin/.gem/ruby/2.3.0/bin" $PATH

# alias vim nvim
alias n ncmpcpp
