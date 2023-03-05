# 01 Header

1. Add a `Header` component in the _components_ folder, which renders an `h1` element

2. `Header` should accept a `text` prop and render it

3. Style the `Header` with the `styles.header`

4. Add `Header` to the `App` instead of the existing `h1` element, with _Character Creator_ as the text

# 02 Button

1. Add a `Button` component in the _components_ folder, which renders a `button` element

2. `Button` should accept a `text` prop and render it

3. Style the `Button` with the `styles.button`

4. Add `Button` to the `App` as a child of the `div.creatorInputs` element, with _Generate_ as the text

5. Add an `onClick` prop to the `Button`

6. Use `console.log` to log _Generate button clicked!_ in the `App` when the button is clicked

# 03 Input

1. Add an `Input` component in the _components_ folder, which renders an `input` element

2. `Input` should accept a `value` and `onChange` props. Bind the props to the input's `value` and `onChange` properties

3. Style the `Input` with the `styles.input`

4. Add a new `Input` to the `App` as a child `div.creatorInputs` container, just before the button

5. Hook into `useState` with an empty string as the default value, and place the state getter and setter variables as
   props to `Input`. The state variables should be named `name` and `setName`.

6. Modify the `Button.onClick` so that it logs the state value from the `Input`

# 04 Label

1. In the `Input` component, add a `div` container with `styles.inputBox` and place the `input` as a child of this
   container

2. Before `input`, add a `label` element. The element should render a `label` prop

3. In the `App`, add a label to the input component. The label should have the value _Name_.

4. Underneath the first add another `Input` component. This component should hook into its own state and have a
   different label. The state variables should be named `superpower` and `setSuperpower`. The label should have the
   value _Superpower_.

5. Modify the `Button.onClick` so that it logs state from both inputs.

# 05 Radio

1. Add a `Radio` component in the _components_ folder

2. This component should accept an `options` prop and dynamically render `input` elements with `type='radio'` for each
   option

- `props.options.map` array function should be used for this
- each input should also have:
  1. `id` property bound to `option`
  2. `name` property bound to `option`
  3. `checked` property bound to a boolean value that is the result of `props.value === option`
  4. `onChange` property that calls the `props.onChange` with the current `option`
- The whole component should have the following structure:
  ```
    <div className={styles.inputBox}>
      <label>{props.label}</label>
      <div className={styles.radioGroup}>
        {props.options.map((option) => (
          <div key={option} className={styles.radioBox}>
            // ...option label and input
          </div>
        ))}
      </div>
    </div>
  ```
- more info on the appropriate structure of a radio input can be found on
  [this link](https://www.w3schools.com/tags/att_input_type_radio.asp).

3. In the `App` add a new `Radio` component after the last `Input`

4. Hook into `useState` with `'female'` as the default value, and place the state getter and setter variables as props
   to `Radio`. The state variables should be named `gender` and `setGender`.

5. Add also an `options={["male", "female"]}` prop, and an `label="Gender"` prop

6. Modify the `Button.onClick` so that it logs the new state also.

# 06 Textarea

1. Add a `Textarea` component in the _components_ folder, which renders a `textarea` element. The component should have
   the following structure:

```
  <div className={styles.inputBox}>
    // ... label
    // ... textarea
  </div>
```

2. The `label` element should render the `label` prop

3. `Textarea` should also accept a `value` and `onChange` props. Bind the props to the textarea's `value` and `onChange`
   properties.

4. Add also the `cols` and `rows` properties to the `textarea` element with values `30` and `5` respectively

5. In the `App` component add a new `Textarea` component after the `Radio`

6. Hook into `useState` with an empty string as the default value, and place the state getter and setter variables as
   props to `Textarea`. The state variables should be named `description` and `setDescription`

7. Bind the `label` prop on `Textarea` to the value _Description_

8. Modify the `Button.onClick` so that it logs the new state also

# 07 Image

1. In `App` add a `Separator` and `Image` components after `div.creatorInputs` (these components are already present in
   the components folder)

2. Hook into `useGeneratedImage` (import from local `hooks` file) and spread its variables: `getImage`, `imageUrl`,
   `isIdle`, `isLoading`, `isError`, `isSuccess`

- `getImageUrl` is a function that sends a prompt to the image generation service
- other variables contain request status flags and the generated image url

3. Modify the `Button.onClick` handler. When the button is clicked a valid string _prompt_ should be made and sent to
   the image generation service

- create a new function for that in the `App` body called `handleGenerate`
- you can generate the prompt with the `generatePromptFromCharacter` util (import from local `utils` file)
- the generated prompt should be sent to the image generation service with the `getImageUrl` function

4. Bind `Image` props to the rest of the variables from `useGeneratedImage`

# 08 Combined state

Currently, we are keeping the `character` data in 4 different state variables (one for each input: name, superpower,
gender, description). We can combine these in a single state object. Each input component will then be responsible for
rendering and changing a specific slice of the combines state.

Combining related state in a single object is a common technique, which is recommended when the state is related. You
can read about the details in [this link](https://beta.reactjs.org/learn/choosing-the-state-structure).

1. Delete the 4 `useState` hooks in the `App` component. Take note of the default values for each state - it will be
   used in the next step
2. Hook into `useState` and use an object as a default value. The object should have the following properties: `name`,
   `superpower`, `gender`, `description`, with the values corresponding to default values in `useState` hooks that were
   deleted in the previous step.

3. Modify each character input component so that it renders the appropriate character property. It should also modify
   only that property in its `onChange` handler. For example:

```
<Input label="Name" value={character.name} onChange={(name) => setCharacter({ ...character, name })} />
```

# 09 Barrel exports

All of the components that are used in the `App` are defined in the `components` folder. When we import these components
we have to target their files. This results a large number of import statements that can be seen at the top of the
`App.js`:

```
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Radio } from "./components/Radio";
import { Textarea } from "./components/Textarea";
import { Separator } from "./components/Separator";
import { Image } from "./components/Image";
```

This is not the pretties thing to look at and, as the project grows, can affect readability of our code. This problem
can be elegantly solved by re-exporting each component from a combined `index.js` file. This technique is called a
_barrel export_, and results in a single import statement for all the related components:

```
import { Header, Button, Input, Radio, Textarea, Separator, Image } from "./components";
```

You can read a quick summary on how to achieve this on
[this link](https://dev.to/justmyrealname/organize-react-components-better-with-barrel-exports-4fno). Or try googling
something like _react barrel exports_.

Setup barrel exports in the _components_ folder, and import all the components in the `App` with a single statement.

# 10 Character Form

Our `App` component is functional and we have the behaviour that we want nailed down. That's great!

On the other hand we can still make improvements to our code, which can make it more readable and maintainable in the
long run. Changes like these, which improve the overall structure of the code but do not impact the general logic and
functionalities are called _refactors_.

A common refactor in _React_ involves extracting components. When we see a number of components that have some kind of
shared UI and behaviour it often advisable to extract them in a single component. This makes the code more
understandable and easier to maintain.

A great candidate for that is the `div.creatorInputs` container with its child inputs and the _Generate_ button. These
inputs are pieces of the same UI (they represent a character creator form) and they manipulate the same state. Create a
separate component that will contain these component and their state. The component will have a single prop `onGenerate`
where a generated character prompt will be sent (use the `generatePromptFromCharacter` for that). We can bind to this
prop in the parent `App` with the function `getImageUrl`. The component will be used like this:

```
<CharacterForm onGenerate={getImageUrl} />
```

You can define the component underneath the `App` in the same file.
