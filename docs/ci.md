# Continuous Integration (CI)

This boilerplate contains some basic workflows to build, lint and test your code.
The workflows are designed for `Github Actions` and will work out of the box with almost zero-configuration.
Feel free to adjust the workflows to your own requirements, you can find all of the workflows in the directory: `.github`

## Automated Releases (Github)

To ensure code quality it's a common practice to create a set of rules that will apply to the `main` branch.
It's highly recommended that you only submit your code by using pull request and never push directly into the `main` branch.

To automate the release process, we will be using the "Github Actions Bot" and it is also affected by these rules.
Below I will describe the workaround, we are going to give the bot administrator privileges so it will be able to bypass all of the rule sets.

- As administrator, create a classic [Personal Access Token](https://github.com/settings/tokens) with "repo" rights
- Now go to your repository
- Click on Settings
- Click on: Secrets and variables -> Actions
- Now click on the button: "New repository secret"
- Configure the name as: `PAT`, copy your generated token and set expiration time

Alternatively you can also go with a different strategy where you manually create the release by using `pnpm release` and then submit the code by pull-request.
While using this strategy do not squash your commits otherwise your release commit might get lost.
