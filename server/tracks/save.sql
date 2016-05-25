insert into artists(
    id,
    name,
    bio,
    photo,
    location
) values (
    '{id}',
    '{name}',
    '{bio}',
    '{photo}',
    '{location}'
) on duplicate key update
    id = values(id),
    name = values(name),
    bio = values(bio),
    photo = values(photo),
    location = values(location)