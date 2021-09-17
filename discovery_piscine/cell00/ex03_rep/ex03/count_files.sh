#!bin/bash

A=$(ls -l | wc -l)

expr $A - 1
