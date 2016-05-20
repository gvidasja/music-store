insert into albums(
    id,
    title,
    year,
    price,
    exclusive,
    albumArt,
    type,
    fk_RecordLabelId,
    fk_ArtistId,
    fk_DiscountId
) values (
    {id},
    {title},
    {year},
    {price},
    {exclusive},
    {albumArt},
    {type},
    {recordLabel},
    {artist},
    {discount}
) on duplicate key update
    title = values(title),
    year = values(year),
    price = values(price),
    exclusive = values(exclusive),
    albumArt = values(albumArt),
    type = values(type),
    fk_RecordLabelId = values(fk_RecordLabelId),
    fk_ArtistId = values(fk_ArtistId),
    fk_DiscountId = values(fk_DiscountId);