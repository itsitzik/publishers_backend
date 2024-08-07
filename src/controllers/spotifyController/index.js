const mongoose = require('mongoose');
const spotifyApi = require('@/api/spotify.api');

exports.searchArtist = async (req, res) => {
  const { q } = req.query;

  // const spotifyResponse = await spotifyApi.searchSpotifyAritst({ q });

  // const artistsResults = (spotifyResponse?.artists?.items || []).map((artist) => {
  //   return {
  //     name: artist.name,
  //     id: artist.id,
  //     image: artist.images.at(0).url,
  //   };
  // });

  const artistsResults = [
    {
      name: 'Hanumankind',
      id: '4nVa6XlBFlIkF6msW57PHp',
      image: 'https://i.scdn.co/image/ab6761610000e5ebd5a94f1d05a422f1057b0e90',
    },
    {
      name: '((( O )))',
      id: '5rBFU1rhgs1nNghopuj9k8',
      image: 'https://i.scdn.co/image/ab6761610000e5eb431944febfeae8814a9baffe',
    },
    {
      name: 'JUNAM',
      id: '7MKcMNO3qWvc2Cik3f5yhS',
      image: 'https://i.scdn.co/image/ab6761610000e5eb2fd3ae7e6e6db859034a2198',
    },
    {
      name: 'Jun Munthe',
      id: '7AqRNMLzlmE6Xe1M4NEfmr',
      image: 'https://i.scdn.co/image/ab67616d0000b2731fc50e012891b2bb60101206',
    },
    {
      name: 'Junior Mance',
      id: '1KTUh4AYegM2fSdac5xqPb',
      image: 'https://i.scdn.co/image/ab67616d0000b273c591aaf79b6df64ea93f0478',
    },
    {
      name: 'Jun Markl',
      id: '69ZwC2PyjJXhXn3XJ86zgd',
      image: 'https://i.scdn.co/image/29dd040a536cb2657e527fdc4b5098385131aef2',
    },
    {
      name: '村山☆潤',
      id: '3lhpkn7TNzz8kqNE8PUOqm',
      image: 'https://i.scdn.co/image/ab67616d0000b27310f3b90f6bfef1c29af88509',
    },
    {
      name: 'Junior Murvin',
      id: '17dXLKGh9AKpooAvGaVt34',
      image: 'https://i.scdn.co/image/26d80cc63e7a42ca13c9dab2587629deff85ae25',
    },
    {
      name: 'JNKMN',
      id: '3TAMa7XcdlVoUTc1giFv1L',
      image: 'https://i.scdn.co/image/ab6761610000e5eb43b73a4396e4bacca983f824',
    },
    {
      name: 'Junim Dantes',
      id: '1l2nfwDjukUdCoVPW2ujFy',
      image: 'https://i.scdn.co/image/ab6761610000e5ebc563500574b6ec4e5bcd8ea2',
    },
  ];

  return res.status(200).json({
    success: true,
    result: artistsResults,
    message: 'ok',
  });
};

exports.artistPreview = async (req, res) => {
  const { artistId } = req.query;

  const UserModel = mongoose.model('Artist');
  const user = await UserModel.findOne({ spotifyArtistId: artistId });

  if (user) {
    return res.status(400).json({
      success: false,
      result: null,
      message: 'This artist is already attached to another user.',
    });
  }

  // const artistData = await spotifyApi.getArtistData(artistId);

  let requestSize = 50;
  let currentAlbums = [];
  let allArtistAlbumsIds = [];
  let offset = 0;
  do {
    currentAlbums = await spotifyApi.getArtistAlbums(artistId, requestSize, offset);
    offset += currentAlbums.total;
    allArtistAlbumsIds = [
      ...allArtistAlbumsIds,
      ...currentAlbums.items.map((album) => {
        return album.id;
      }),
    ];
  } while (currentAlbums.total == requestSize);

  let allArtistAlbums = await spotifyApi.getSeveralAlbums(allArtistAlbumsIds);

  let allArtistTracks = allArtistAlbums.albums.reduce((tracks, album) => {
    const albumTracks = album.tracks.items;
    for (let i = 0; i < albumTracks.length; i++) {
      const track = albumTracks[i];
      tracks.push({
        id: track.id,
        name: track.name,
        image: album.images.at(0).url,
        externalIds: track.external_ids,
      });
    }
    return tracks;
  }, []);

  return res.status(200).json({
    success: true,
    result: allArtistTracks,
    message: 'ok',
  });
};
