#!/bin/bash

MINECRAFT="https://launcher.mojang.com/v1/objects/1b557e7b033b583cd9f66746b7a9ab1ec1673ced/server.jar"
FABRIC="https://maven.fabricmc.net/net/fabricmc/fabric-installer/0.7.3/fabric-installer-0.7.3.jar"
PACKWIZ="https://github.com/comp500/packwiz-installer-bootstrap/releases/download/v0.0.3/packwiz-installer-bootstrap.jar"
PACKFILE="https://gaycookie.github.io/Fabricated/pack.toml"

MINECRAFT_FILE="./server.jar"
FABRIC_FILE="./fabric-installer-0.7.3.jar"
PACKWIZ_INSTALLER_FILE="./packwiz-installer.jar"
PACKWIZ_BOOTSTRAP_FILE="./packwiz-installer-bootstrap.jar"

if ! [ -f $MINECRAFT_FILE ]; then
  wget $MINECRAFT
fi

if ! [ -f $FABRIC_FILE ]; then
  wget $FABRIC
  java -jar $FABRIC_FILE server
  rm $FABRIC_FILE
else
  java -jar $FABRIC_FILE server
  rm $FABRIC_FILE
fi

if ! [ -f $PACKWIZ_BOOTSTRAP_FILE ]; then
  wget $PACKWIZ
  java -jar $PACKWIZ_BOOTSTRAP_FILE -g -s server $PACKFILE

  rm $PACKWIZ_BOOTSTRAP_FILE
  if [ -f $PACKWIZ_INSTALLER_FILE ]; then
    rm $PACKWIZ_INSTALLER_FILE
  fi
else
  java -jar $PACKWIZ_BOOTSTRAP_FILE -g -s server $PACKFILE

  rm $PACKWIZ_BOOTSTRAP_FILE
  if [ -f $PACKWIZ_INSTALLER_FILE ]; then
    rm $PACKWIZ_INSTALLER_FILE
  fi
fi
