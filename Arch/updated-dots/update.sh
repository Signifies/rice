#!/usr/bin/env bash
# File to update configs.
# Example
# cp ~/Documents/ashley.txt $HOME/updated-dots
# echo "Moved file..."
# cp ~/Documents/evan.txt $HOME/updated-dots
# echo "Moved Evans file."
# # # # # # # # # # # # # # # # # # # #

# BSPWM
cp -r ~/.config/bspwm/ $HOME/updated-dots
echo "Copied BSPWM..."
# sxhkd
cp -r ~/.config/sxhkd/ $HOME/updated-dots
echo "Copied sxhkd..."
# polybar
cp -r ~/.config/polybar/ $HOME/updated-dots
echo "Copied Polybar..."
# Compton
cp -r ~/.config/compton/ $HOME/updated-dots
echo "Copied Compton..."
