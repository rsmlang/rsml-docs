# Macros

> [!CAUTION] 🚧 Under Construction
> Macros are not available yet.

Macros let you define a block of rsml markup which can be reused throughout your styles. They can be defined via the macro declaration:

```rsml
@macro MyAwesomeMacro {
    Size = udim2 (200px, 100px);
    Position = udim2 (.5, .5)
}
```

Macros can be given arguments which can be referenced within said macro via a `$!` prefix. You can also optionally define defaults and a data type for arguments:

```rsml
@macro MyCoolMacro (
    size: udim2 = udim2 (200px, 100px)
) {
    Size = $!size;
    Position = udim2 (.5, .5)
}
```





## Psuedo Properties

Psuedo properties are how macros are embedded into style sheets. A psuedo property is defined with a `!` prefix. The name of the psuedo property must reference a name of a macro.

::: code-group
```rsml [Example]
TextButton {
    !MyAwesomeMacro
}
```

```rsml [Evaluates To]
TextButton {
    Size = udim2 (200px, 100px);
    Position = udim2 (.5, .5)
}
```
:::


You can also optionally define the psuedo property with arguments. More than one arguments can be defined via a tuple.

::: code-group
```rsml [Example]
TextButton {
    !MyCoolMacro = udim2 (50% + 100px, 50% + 50px)
}
```

```rsml [Evaluates To]
TextButton {
    Size = udim2 (50% + 100px, 50% + 50px);
    Position = udim2 (.5, .5)
}
```
:::





## Overloading

You can define multiple macros with the same name but with different arguments. Any psuedo property which references the macros shared name will use its arguments to infer which macro to use.

For example:

```rsml
@macro Align (align: "center") {
    Position = udim2 (.5, 0)
}

@macro Align (align: "left") {
    Position = udim2 (0, 0)
}

@macro Align (align: "right") {
    Position = udim2 (1, 0)
}

TextButton {
    !Align = "left" -- Position will be `udim2 (0, 0)`.
}

TextLabel {
    !Align = "center" -- Position will be `udim2 (.5, 0)`.
}
```