# Selectors

Selectors are used to define which instances a rule is responsible for styling:

| Name | Specifier | Description |
| ---- | --------- | ----------- |
| Class Selector | n/a | Styles instances with a specific class name. |
| Name Selector | `#` | Styles instances which have a specific name. |
| Tag Selector | `.` | Styles instances which have a specific tag. |
| State Selector | `:` | Styles instances which have a specific state active (e.g. hover). |
| Psuedo Selector | `::` | Creates a new instance of a specific class name. |





## Examples
```rsml
TextButton {}
#CoolElement {}
.MyTag {}
:hover {}
::UIPadding {}
```





## Unnecessary Nesting

You can put selectors next to each other to avoid unnecessary nesting of rules:

::: code-group
```rsml [After]
TextButton ::UICorner {

}
```
```rsml [Before]
TextButton {
    ::UICorner {

    }
}
```
:::






## Multiple Selectors

You can apply the same rule to multiple selectors by using a comma separated list (note that this will still compile to three distinct style rule instances):
::: code-group
```rsml [After]
TextButton, TextLabel, ImageButton ::UICorner {
    Size = udim2 (.5, .5);
    Position = udim2 (.5, .5)
}
```

```rsml [Before]
TextButton {
    Size = udim2 (.5, .5);
    Position = udim2 (.5, .5)
}

TextLabel {
    Size = udim2 (.5, .5);
    Position = udim2 (.5, .5)
}

ImageButton ::UICorner {
    Size = udim2 (.5, .5);
    Position = udim2 (.5, .5)
}
```
:::


## Select Children And Descendants

`>` can be used to select children, and `>>` can be used to select descendants.

```rsml
-- Selects all Instances with the class `TextLabel`
-- that are children of `ImageButton` Instances.
ImageButton > TextLabel {

}

-- Selects all Instances with the class `TextLabel`
-- that are descendants of `ImageButton` Instances.
ImageButton >> TextLabel {

}

#FooBar {
    -- Selects all Instances called `Baz`
    -- that are children of Instances called `FooBar`.
    > #Baz {

    }

}
```
