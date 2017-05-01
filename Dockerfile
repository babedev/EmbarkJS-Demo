FROM ubuntu:latest
MAINTAINER Genxas

RUN apt-get update
RUN apt-get -y install sudo vim curl git nodejs npm

RUN apt-get install -y software-properties-common
RUN add-apt-repository -y ppa:ethereum/ethereum
RUN apt-get update
RUN apt-get install -y ethereum

RUN apt-get install -y python python-pip wget
RUN pip install Flask

RUN npm -g install embark
RUN ln -s /usr/bin/nodejs /usr/bin/node