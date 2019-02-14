#!/usr/bin/env bash
# File to update configs.
# Example
# cp ~/Documents/ashley.txt $HOME/updated-dots
# echo "Moved file..."
# cp ~/Documents/james.txt $HOME/updated-dots
# echo "Moved James file."
# # # # # # # # # # # # # # # # # # # #

# BSPWM
cp -r ~/.config/bspwm/ $HOME/rice/Arch/
echo "Copied BSPWM..."
# sxhkd
cp -r ~/.config/sxhkd/ $HOME/rice/Arch/
echo "Copied sxhkd..."
# Lemon Bar
cp -r ~/.config/bar $HOME/rice/Arch/
# Compton
cp -r ~/.config/compton/ $HOME/rice/Arch
echo "Copied Compton..."
