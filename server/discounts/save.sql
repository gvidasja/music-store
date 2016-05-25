insert into discounts(
    id,
    amount,
    name,
    type
) values (
    {id},
    {amount},
    '{name}',
    {type}
) on duplicate key update
    id = values(id),
    amount = values(amount),
    name = values(name),
    type = values(type)