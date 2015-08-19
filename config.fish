set -x BROWSER chromium
set -x EDITOR vim
set -x TERMINAL gnome-terminal
set -x TERMINUS_DEV_CONF /home/kevin/Code/python/flask/xlate/config/development.py
set -x ttymouse xterm2
set -gx PATH "/usr/local/bin" "." $PATH
bash ~/.local/bin/bashmarks.sh

function fish_greeting
    fortune
end

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

function powerline-setup
	function _powerline_columns_fallback
		if which stty >/dev/null
			if stty size >/dev/null
				stty size | cut -d' ' -f2
				return 0
			end
		end
		echo 0
		return 0
	end

	function _powerline_columns
		# Hack: `test "" -eq 0` is true, as well as `test 0 -eq 0`
		# Note: at fish startup `$COLUMNS` is equal to zero, meaning that it may 
		# not be used.
		if test "$COLUMNS" -eq 0
			_powerline_columns_fallback
		else
			echo "$COLUMNS"
		end
	end

	if test -z "$POWERLINE_CONFIG_COMMAND"
		if which powerline-config >/dev/null
			set -g POWERLINE_CONFIG_COMMAND powerline-config
		else
			set -g POWERLINE_CONFIG_COMMAND (dirname (status -f))/../../../scripts/powerline-config
		end
	end

	if env $POWERLINE_CONFIG_COMMAND shell --shell=fish uses prompt
		if test -z "$POWERLINE_COMMAND"
			set -g POWERLINE_COMMAND (env $POWERLINE_CONFIG_COMMAND shell command)
		end
		function --on-variable fish_key_bindings _powerline_set_default_mode
			if test x$fish_key_bindings != xfish_vi_key_bindings
				set -g _POWERLINE_DEFAULT_MODE default
			else
				set -g -e _POWERLINE_DEFAULT_MODE
			end
		end
		function --on-variable POWERLINE_COMMAND _powerline_update
			set -l addargs "--last-exit-code=\$status"
			set -l addargs "$addargs --last-pipe-status=\$status"
			set -l addargs "$addargs --jobnum=(jobs -p | wc -l)"
			# One random value has an 1/32767 = 0.0031% probability of having 
			# the same value in two shells
			set -l addargs "$addargs --renderer-arg=client_id="(random)
			set -l addargs "$addargs --width=\$_POWERLINE_COLUMNS"
        end
    end
end

# start X at login
#if status --is-login
#    if test -z "$DISPLAY" -a $XDG_VTNR = 1
#        exec startx
#    end
#end

. /usr/lib/python3.4/site-packages/powerline/bindings/fish/powerline-setup.fish
powerline-setup

# Start the powerline daemon to prevent lag
powerline-daemon -q
