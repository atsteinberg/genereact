# genereact

simple shell script to add components, containers or services to your existing create react app, using typescript and sass css modules

## Getting started

1. 

   * on mac: install gsed on your system (e.g. with homebrew)


   * on linux: change all occurrences of "gsed" in generate script to "sed"
   
   * on windows: ? pray ?

2. find your local bin folder, i.e. either:

   a. cd ~/bin
   
   b. if it does not exist:

```bash
cd ~
mkdir bin
```

​			add 

```bash 
export PATH="$HOME/bin:$PATH";
```

​			to your .bash_profile

```bash
cd ~/bin
```

3. create symlink to generate script in ~/bin

```bash
ln -s <PATH_TO_GENERATE_SCRIPT> generate
```

## usage

anywhere in your react project (src or below):
```bash
generate component <componentName> [<prop1Name:prop1Type> <prop2Name:prop2Type> ...]
```
```bash
generate container <containerName> [<prop1Name:prop1Type> ...]
```
```bash
generate service <serviceName>
```
## Developer
- Alex Steinberg: [github](https://github.com/atsteinberg) – [linkedin](https://www.linkedin.com/in/alexander-steinberg-7b7299194) – [web](atsteinberg.github.io)
