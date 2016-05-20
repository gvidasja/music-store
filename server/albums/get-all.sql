select
    albums.id,
    title,
    year,
    price,
    exclusive,
    albumtypes.name as type,
    artists.name as artist,
    recordlabels.name as recordLabel,
    discounts.name as discount
from
    albums
    left join discounts on albums.fk_Discountid = discounts.id
    join artists on albums.fk_Artistid = artists.id
    join albumtypes on albums.type = albumtypes.id_Albumtype
    join recordlabels on albums.fk_RecordLabelid = recordlabels.id