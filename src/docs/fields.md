# Fields
Rsml has two main types of fields: `Properties` and `Variables`. (`Psuedo Properties` also exist which are documented [here](/docs/macros)).


## Properties
Property fields are used to define properties for instances. They can be assigned either a variable or a data type. They can be written as follows:

```rsml
SomeProperty = nil
```


## Variables
Variables are used to store a data type that can be assigned to multiple properties. If a variable is changed then the properties it is assigned to will update accordingly.

They propagate downwards which means that rules will inherit variables from their ancestor(s). If multiple variables of the same name are defined then the most recently defined one takes precedence. They can be written with a dollar sign prefix as follows:

```rsml
$MyVariable = nil
```

- - -

Both properties and variables can be assigned the same data types, more info on data types can be found [here](/docs/data-types).