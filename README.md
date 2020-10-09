# genereact

simple shell script to add components, containers or services to your existing create react app, using typescript and sass css modules

## install

1. 

   * on mac: install gsed on your system (e.g. with homebrew)


   * on linux: change all occurrences of "gsed" in generate script to "sed"

2. find your local bin folder, i.e. either:

3. 

   1. cd ~/bin
   2. if it does not exist:

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

4. create symlink to generate script in ~/bin

```bash
ln -s <PATH_TO_GENERATE_SCRIPT> generate
```

