insert into tracks(
    id,
    title,
    tempo,
    length,
    genre,
    fk_Albumid
) values (
    {id},
    '{title}',
    {tempo},
    {length},
    {genre},
    {album}
) on duplicate key update
    id = values(id),
    title = values(title),
    tempo = values(tempo),
    length = values(length),
    genre = values(genre),
    fk_Albumid = values(fk_Albumid)