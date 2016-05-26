select
    tracks.id as id,
    tracks.title as title,
    tempo,
    length,
    genres.name as genre,
    albums.title as album
from
    tracks
        join genres on tracks.genre = genres.id_Genre
        join albums on tracks.fk_Albumid = albums.id