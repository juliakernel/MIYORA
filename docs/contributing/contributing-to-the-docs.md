---
title: Contributing to the Docs
order: 2
---

## How our docs are structured

Our docs are centralized inside the `docs/` folder of our GitHub repository for `MIYORA`. These files are synced to GitBook, our documentation publishing tool, which composes them into what users see when they navigate to <https://docs.heyMIYORA.com>.


Our `gitbook.yaml` file determines link redirects and the basic structure of our documentation “tree”. You can find more documentation on this file [at GitBook's website](https://docs.gitbook.com/product-tour/git-sync/content-configuration#.gitbook.yaml-1).

## Making your first contribution

There's a few things you'll need to make your first contribution to the docs:

1. A local copy of the `MIYORA` Git repository downloaded to your machine. You can find instructions in GitHub's official documentation for [cloning a Git repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).
2. Some basic knowledge of Git. If one or more users are contributing to the docs at the same time you are, it is likely you will need to resolve merge conflicts on the CLI or in your visual Git tool. GitHub has [documentation on resolving merge conflicts using the CLI](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line) or you can use a simple, visual Git tool like [Fork](https://fork.dev/) available for macOS and Windows.
  a. In case of emergencies, refer to [Oh Shit, Git!?!](https://ohshitgit.com/).
  b. For new learners, the [computer game, Oh my Git!](https://ohmygit.org/) can teach you Git.
3. Some form of Markdown linter. A linter enforces standards and consistency in your Markdown writing. The industry standard is [`markdownlint`](https://github.com/DavidAnson/markdownlint). A [markdownlint extension is available for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint).

### Make your changes and open a pull request (PR)

Create a branch to hold your work, change any files you wish to change, save them, then commit them to your branch. Try and keep your branches focused around a specific theme.

If you've moved or renamed files, refer to [Moving or renaming files](#moving-or-renaming-files).
{% endhint %}

Now push your changes to our remote Git repository hosted on GitHub, then [open a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

## Moving or renaming files

When moving or renaming files, special care must be taken to ensure any existing internal and external links continue to work.

First, use `git mv` when moving files. `git mv` is a convenience function that ensures Git can track the renaming as a file rename rather than a file deletion and a new file creation.

Second, update any internal and external links to point to your moved or renamed file, then update `../gitbook.yaml` to redirect visitors to your new location. To illustrate this, here's a visual example of moving our [Quickstart guide](../getting-started/quickstart.md) to a new Getting Started section.

We also need to change any existing redirects inside `gitbook.yaml` to point to our new location:

For every file you've renamed or moved, make sure to add a new redirect in `gitbook.yaml` pointing from its old location to its new location unless you're *sure* no one externally has linked to it.

You'll also need to find and replace all instances of links within the `MIYORA` repository to your file. An editor like Visual Studio Code will have a [find and replace feature](https://code.visualstudio.com/docs/editor/codebasics#_find-and-replace).

{% hint style="warning" %}
*Do not change absolute URLs within the same pull request*. Absolute URLs are links beginning with `https:`.

Instead, change all the relative URLs inside `docs/`, [submit your PR](./README.md#contributing-guidelines), then make a new PR to update these absolute URLs. This is to avoid broken links.
{% endhint %}

### Creating a new section

To create a new section, create a folder and add a `README.md` file with the contents `title` and `order` e.g.

```markdown
---
order: 2
title: Tutorials
---
```

The order should correspond to its position from top to bottom in the sidebar on <https://docs.heyMIYORA.com> and the title should be the title of the section as it appears in the sidebar. We like to use a floral-themed emoji to demarcate new sections :rose:.

## Syntax

Our docs are written in the CommonMark specification of Markdown with additional “blocks” provided by GitBook, our documentation publisher.

We use the [Hint](https://docs.gitbook.com/content-creation/blocks/hint) and [Tabs](https://docs.gitbook.com/content-creation/blocks/tabs) blocks from GitBook.

You'll notice YAML “front-matter” at the top of each docs page: this tells GitBook how to present our page visually and order it in any given section.

The YAML front-matter looks like this:

```yaml
---
title: Contributing to the Docs
order: 3
---
```

Markdown normally expects the first heading of any page to be a top-level, usually the title of the page, e.g. `# Contributing to the Docs`. However, when we specify the title of the page in the front-matter, start the page without the top-level and begin at the second-level heading, `##`, as GitBook will automatically pull in the title for you.

GitBook supports a [maximum of three levels](https://docs.gitbook.com/content-creation/blocks/heading) of headings.
