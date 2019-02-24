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
cp -r ~/.config/panel $HOME/rice/Arch/
echo "Copied Bar..."
# Compton
cp -r ~/.config/compton/ $HOME/rice/Arch/
echo "Copied Compton..."
# Xresources
cp ~/.Xresources $HOME/rice/Arch/Xresources
echo "Copied Xresources..."
# Vimrc
cp ~/.vimrc $HOME/rice/Arch/
echo "Copied .vimrc..."
# Vim files
cp -r ~/.vim/ $HOME/rice/Arch/vim
echo "Copied Vim files..."
