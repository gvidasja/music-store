insert into users(
    id,
    title,
    year,
    price,
    exclusive,
    userArt,
    type,
    fk_RecordLabelId,
    fk_ArtistId,
    fk_DiscountId
) values (
    {id},
    '{title}',
    {year},
    {price},
    {exclusive},
    '{userArt}',
    {type},
    {recordLabel},
    {artist},
    {discount}
) on duplicate key update
    title = values(title),
    year = values(year),
    price = values(price),
    exclusive = values(exclusive),
    userArt = values(userArt),
    type = values(type),
    fk_RecordLabelId = values(fk_RecordLabelId),
    fk_ArtistId = values(fk_ArtistId),
    fk_DiscountId = values(fk_DiscountId);