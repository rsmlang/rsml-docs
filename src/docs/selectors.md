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

> [!CAUTION] 🚧 Under Construction
> This feature is still being developed and therefore is not available yet.






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

> [!CAUTION] 🚧 Under Construction
> This feature is still being developed and therefore is not available yet.





## Selector Aliases

Normally you can target the same instance across multiple rules by using the same selector, however this is not the case with Psuedo Selectors as they create a new Instance instead of referencing an existing one. This makes it impossible to target the same Psuedo Instance from multiple macros (for example).

By giving rules with identical selectors the same alias you are explicitly opting-in to merge them into one consolidated [StyleRule](https://create.roblox.com/docs/reference/engine/classes/StyleRule) Instance.

Aliases are scoped to the the parent rule or sheet they are defined in. This means you cannot merge with rules from [derived](/docs/derives) style sheets. This does not apply to aliases returned from [macros](/docs/macros) however as they are considered in scope to the parent rule or sheet they are embedded into.

Selector Aliases are not just limited to Psuedo Selectors, however using them in this way will result in semantically identical styling. The only difference is that you will have one [StyleRule](https://create.roblox.com/docs/reference/engine/classes/StyleRule) instead of many.

You may apply up to one alias per selector via a square bracket syntax:
```rsml
::UIPadding[myAlias] {}
```

> [!CAUTION] 🚧 Under Construction
> This feature is still being developed and therefore is not available yet.






