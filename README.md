npm-doctor
==========

Diagnosis and reporting tool for npm problems


## Development

Fork this project

```
$ git clone https://github.com/<you>/npm-doctor
$ npm link
```

In your fork of npm, add `smikes/npm` as  a remote:

```
$ git remote add smikes https://github.com/smikes/npm
$ git fetch --all
$ git checkout smikes/npm-doctor
$ git checkout -b npm-doctor
$ npm link npm-doctor
```

Now the doctor should work:
```
$ node ./cli.js doctor
The doctor is in.
 node version: v0.10.33
 npm version : 2.1.11
```
