insert into recordLabels(
    id,
    title,
    year,
    price,
    exclusive,
    recordLabelArt,
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
    '{recordLabelArt}',
    {type},
    {recordLabel},
    {artist},
    {discount}
) on duplicate key update
    title = values(title),
    year = values(year),
    price = values(price),
    exclusive = values(exclusive),
    recordLabelArt = values(recordLabelArt),
    type = values(type),
    fk_RecordLabelId = values(fk_RecordLabelId),
    fk_ArtistId = values(fk_ArtistId),
    fk_DiscountId = values(fk_DiscountId);