select
    id,
    title,
    tempo,
    length,
    genre,
    fk_Albumid
from tracks where id = {id};