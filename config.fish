set -x BROWSER chromium
set -x EDITOR vim
set -x TERMINAL gnome-terminal
set -x TERMINUS_DEV_CONF /home/kevin/Code/python/flask/xlate/config/development.py
set -x ttymouse xterm2
set -gx PATH "/usr/local/bin" "." $PATH
bash ~/.local/bin/bashmarks.sh
set -x PYTHONSTARTUP /home/kevin/Code/python/scripts/pretty_json.py
# Set the key repeat rate
xset r rate 160 60

function fish_greeting
#     fortune phrases vocabulary
end

# Load fishmarks (http://github.com/techwizrd/fishmarks)
. $HOME/.fishmarks/marks.fish

function starttitan
    /home/kevin/Software/development/databases/titan-server-0.4.4/bin/titan.sh -c cassandra-es start
end

function startorientdb
    /home/kevin/Software/development/databases/orientdb-community-2.1.5/bin/server.sh
end

function startrexster
    cd /home/kevin/Software/development/databases/rexster-server-2.6.0
    ./bin/rexster.sh -s
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
set -gx OMF_PATH /home/kevin/.local/share/omf

# Customize Oh My Fish configuration path.
#set -gx OMF_CONFIG /home/kevin/.config/omf

# Load oh-my-fish configuration.
source $OMF_PATH/init.fish

###########################################

