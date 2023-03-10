# Character Creator

This is an AI-powered character creator app. The idea is to input some basic parameters which are afterwards sent to the
DALL-E AI engine. The engine replies with an url of the generated image. The app is used to create images of fictional
video game characters.

The app is created for the FER FrontED workshop and should be used as learning material for React basics.

# Tasks and branches

The project is divided in 10 tasks. The tasks include building simple components that will be used as input components
for the character creator form. The tasks can be seen in the _tasks.md_ file at the root of the project.

_Hint: you can open them on GitHub at [this link](https://github.com/fbolcic/character-creator/blob/main/tasks.md) for a
cleaner reading experience._

There are 10 branches in the project which point to a commit where a task is solved. For example, using
`git switch 01/header` will switch you to the branch that contains the solution for the first task.

The branches point to one another, so using `git switch 02/button` will switch you to the second one, where both the
first and second task are solved.

You can use this mechanism to see the solution if you get stuck, or for some other reason don't want to solve the
current task! The final app code can be found with `git switch 10/character-form`.

_Hint: some tasks are more difficult than others (for example, the fifth assignment which involves building a radio
input will be a bit challenging). My advice is to do your best to try to solve them but if you get stuck just switch to
the solution - and study it a bit._

## Cloning the repo

Since the task solutions rely on git branches, it is advisable to clone the repository. You can still work on the
project if you download it as a _.zip_ file but in that case you will not be able to use git.

You can find detailed instructions on how to clone a GitHub repo on
[this link](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

But hey, what is git?? git is a version control system used for tracking changes. This is the
[simplest guide I could find](https://rogerdudler.github.io/git-guide/). There are lots of other resources online.

# Adding the OpenAI API key

The app uses the OpenAI API to generate images. To use the platform you need to first register and generate an API key.

1. Signup to the OpenAI platform on [this link](https://platform.openai.com/overview). You can use whatever name and
   organization you want, it does not matter.

2. Once you are signed in click on the user badge in the top right corner and go to _View API keys_ or use
   [this link](https://platform.openai.com/account/api-keys).

3. Create a new API key with _Create new secret key_. Make sure to copy the new key - it will become hidden once you
   navigate away.

Next you will have to add the key to the project via an env variable.

1. Create a new file at the project root named `.env`

2. Add the copied key to the variable `REACT_APP_OPENAI_API_KEY`. The statement should look something like this:

```
REACT_APP_OPENAI_API_KEY = your_openai_api_key
```

3. You will need to restart the project with `npm run start` for the env variable to take effect.

You can read up on create-react-app environment variables on
[this link](https://create-react-app.dev/docs/adding-custom-environment-variables).

## OpenAI usage quotas

OpenAI provides a free trial for their platform in the amount of 18$ of credits for a certain number of months. Each API
call is billed according to its pricing tier. This free tier should be more than enough for this demo app - it should
cover ~1000 image generations.

You can find find the current usage for your OpenAI account on [this link](https://platform.openai.com/account/usage)
(you have to be signed in).

# Starting the project

1. Clone the repo

2. Open the project in VS Code (or some other editor)

3. Open terminal in the project root

4. Run `npm install` in terminal

5. Run `npm run start` in terminal

# React docs

Working on the tasks requires knowledge of React basic concepts. React docs are a great learning material for this. You
can read up on [this link](https://reactjs.org/docs/hello-world.html) (the _Main Concepts_ chapter should be more than
enough).
