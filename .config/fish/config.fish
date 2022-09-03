# Disable the default venv prompt
set -x VIRTUAL_ENV_DISABLE_PROMPT 1

set -x BROWSER vivaldi-stable
set -x EDITOR vim
set -x TERMINAL urxvt
set -x ttymouse xterm2

set -x GTK_IM_MODULE ibus
set -x XMODIFIERS @im=ibus
set -x QT_IM_MODULE ibus

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

function startposterious
    cd /home/kevin/Code/zephony/posterious
    . venv/bin/activate.fish
    python run.py
end

function startazaad
    cd /home/kevin/Code/clients/cartoonmango/azaad
    . venv/bin/activate.fish
    python run.py
end

function startadvisorscoop
    cd /home/kevin/Code/clients/mike/advisorscoop
    . venv/bin/activate.fish
    python run.py
end

function startwysible
    cd /home/kevin/Code/clients/nishanth/wysible
    . venv/bin/activate.fish
    python run.py
end

function startshloak
    cd /home/kevin/Code/clients/dennis/shloak
    . venv/bin/activate.fish
    python run.py
end

function startqb
    cd /home/kevin/Code/zephony/quizbuilder
    . venv/bin/activate.fish
    python run.py
end

function startbasket
    cd /home/kevin/Code/clients/matt/basket
    . venv/bin/activate.fish
    python run.py
end

function buildshloak
    cd /home/kevin/Code/clients/dennis/ShloakMobile/Shloak
    npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
    cd android/
    ./gradlew assembleDebug
    cd ..
end

function buildconsumertranslations
    cd /home/kevin/Code/clients/dennis/shloak
    flask translations-rebuild && flask export-translations-json consumer && cp data/consumerTranslations.json /home/kevin/Code/clients/dennis/ShloakMobile/Shloak/data/translations.json
end

function buildvendortranslations
    cd /home/kevin/Code/clients/dennis/shloak
    flask translations-rebuild && flask export-translations-json vendor && cp data/vendorTranslations.json static/js/react/data/translations.json
end

function startdemo1
    cd /home/kevin/Code/zephony/demo-1
    . venv/bin/activate.fish
    python run.py
end

function startsunassist
    cd /home/kevin/Code/clients/patrick/sunassist
    . venv/bin/activate.fish
    python manage.py runserver
end

# Start Ordway rails app
function startordway
    cd /home/kevin/Code/ordway/ordway
    env REACT_ON_RAILS_ENV=HOT rails s -b 0.0.0.0
end

function startvision
    cd /home/kevin/ordway-repos/vision
    . venv/bin/activate.fish
    env (cat lambda.env | awk NF) flask run
end

function startordwaywebpack1
    cd /home/kevin/Code/ordway/ordway
    nvm use 18
    env HOT_RAILS_PORT=3500 npm run hot-assets
end

function startordwaywebpack2
    cd /home/kevin/Code/ordway/ordway
    nvm use 18
    env NODE_OPTIONS='--max-old-space-size=8192' HOT_RAILS_PORT=3200 npm run hot-assets:v2
end


function startelastic6.5
    /home/kevin/Downloads/elasticsearch-6.5.4/bin/elasticsearch
end

function startviscom
    cd /home/kevin/Code/ordway/lookerviscom
    . venv/bin/activate.fish
    flask run --port 5002
end



# React Native related
set -x ANDROID_HOME $HOME/Android/Sdk
set -x PATH $PATH $ANDROID_HOME/tools
set -x PATH $PATH $ANDROID_HOME/tools/bin
set -x PATH $PATH $ANDROID_HOME/emulator
set -x PATH $PATH $ANDROID_HOME/platform-tools

# Ruby rbenv related
status --is-interactive; and rbenv init - fish | source

