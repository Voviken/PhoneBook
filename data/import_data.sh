#!/bin/bash

mongoimport --db phonebookdb --collection categories --drop --file categories.json
mongoimport --db phonebookdb --collection users --drop --file users.json
mongoimport --db phonebookdb --collection contacts --drop --file contacts.json
