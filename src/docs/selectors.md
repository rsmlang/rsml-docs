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
``` [After]
TextButton ::UICorner {

}
```
``` [Before]
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
    Size = udim2 (.5, .5),
    Position = udim2 (.5, .5),
}
```

```rsml [Before]
TextButton {
    Size = udim2 (.5, .5),
    Position = udim2 (.5, .5),
}

TextLabel {
    Size = udim2 (.5, .5),
    Position = udim2 (.5, .5),
}

ImageButton ::UICorner {
    Size = udim2 (.5, .5),
    Position = udim2 (.5, .5),
}
```
:::





## Selector Aliases

In some situations you may want to merge two different rules with the same psuedo instance selector into one. This is mainly useful if you have a group of [macros](/docs/macros) which you want to use the same psuedo instance with.

An alias is an explicit opt-in to merge identical selectors into one consolidated rule. Rules with an identical selector and alias are merged.

Aliases are scoped to the style sheet they are created in, meaning you cannot merge with rules from [derived](/docs/derives) style sheets. This does not apply to selectors returned from [macros](/docs/macros) however as they are considered part of the current style sheet.

You may apply up to one alias per selector via a square bracket syntax:
```
::UIPadding[myAlias] {}
```

*(Whilst aliases are designed to be used with psuedo instance selectors there is nothing preventing them being used with other selectors, however other selectors which are identical are already automatically merged so theres no reason to do this).*