#!bin/bash

if [ $# -eq 0 ]
	then
		echo "No arguments supplied"
		exit 0
fi

if [ $# -ge 4 ]
	then
		exit 0
fi

for i in "$@"
	do
		echo "$i"
done
