# Terminate running processes.

killall -q polybar


while pgrep -x >/dev/null; do sleep 1;
done

#Initate
#polybar #Configured polybar name
polybar main & 
echo "Initalized polybar for ES1"
