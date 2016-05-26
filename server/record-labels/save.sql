insert into recordLabels(
    id,
    name,
    description,
    royalties
) values (
    {id},
    '{name}',
    '{description}',
    {royalties}
) on duplicate key update
    id = values(id),
    name = values(name),
    description = values(description),
    royalties = values(royalties)