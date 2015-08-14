set -x BROWSER chromium
set -x EDITOR vim
set -x TERMINAL gnome-terminal
set -x TERMINUS_DEV_CONF /home/kevin/Code/python/flask/xlate/config/development.py
set -x ttymouse xterm2
set -gx PATH "/usr/local/bin" "." $PATH
bash ~/.local/bin/bashmarks.sh

function fish_prompt
	set_color purple
	printf "---------->["
	set now (date +"%A %d %b")
	printf $now | sed ':a;N;$!ba;s/\n/ /g'
	printf '] '
	set_color blue
	echo (pwd)
	set_color purple
	printf '-> '
	set_color normal
end

# Load fishmarks (http://github.com/techwizrd/fishmarks)
. $HOME/.fishmarks/marks.fish

function starttitan
    /home/kevin/Software/development/databases/titan-server-0.4.4/bin/titan.sh -c cassandra-es start
end

function startorientdb
    /home/kevin/Software/development/databases/orientdb-community-2.0.5/bin/server.sh
end

function startrexster
    cd /home/kevin/Software/development/databases/rexster-server-2.6.0
    ./bin/rexster.sh -s
end

# start X at login
#if status --is-login
#    if test -z "$DISPLAY" -a $XDG_VTNR = 1
#        exec startx
#    end
#end
