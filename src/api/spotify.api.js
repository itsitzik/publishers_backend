const sendApiRequest = require('./$api');

const spotifyApiHostname = 'https://api.spotify.com';
const spotifyApiBasePath = '/v1/';

const getSpotifyAccessToken = async () => {
  const axios_config = {
    url: 'https://accounts.spotify.com/api/token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: {
      grant_type: 'client_credentials',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET,
    },
  };
  return new Promise(async (resolve, reject) => {
    sendApiRequest(axios_config)
      .then((res) => {
        console.log('bla2', res);
        resolve(res);
        //   logger.info(data.length + 'לוחות סונכרנו בהצלחה', {});
      })
      .catch((error) => {
        console.log('bla3', error);
        reject(error);
        //   logger.error(error, data);
      });
  });
};

const searchSpotifyAritst = async (data) => {
  return new Promise(async (resolve, reject) => {
    const BearerToken = await getSpotifyAccessToken();

    const axios_config = {
      url: spotifyApiHostname + spotifyApiBasePath + 'search',
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + BearerToken.access_token,
      },
      params: {
        q: data.q,
        type: 'artist',
        limit: 10,
        offset: 0,
      },
    };

    sendApiRequest(axios_config)
      .then((res) => {
        console.log('bla2', res);
        resolve(res);
        //   logger.info(data.length + 'לוחות סונכרנו בהצלחה', {});
      })
      .catch((error) => {
        console.log('bla3', error);
        reject(error);
        //   logger.error(error, data);
      });
  });
};

const getArtistData = async (artistId) => {
  return new Promise(async (resolve, reject) => {
    const BearerToken = await getSpotifyAccessToken();

    const axios_config = {
      url: spotifyApiHostname + spotifyApiBasePath + 'artists/' + artistId,
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + BearerToken.access_token,
      },
    };

    sendApiRequest(axios_config)
      .then((res) => {
        console.log('bla2', res);
        resolve(res);
        //   logger.info(data.length + 'לוחות סונכרנו בהצלחה', {});
      })
      .catch((error) => {
        console.log('bla3', error);
        reject(error);
        //   logger.error(error, data);
      });
  });
};

const getArtistAlbums = async (artistId, requestSize, offset) => {
  return new Promise(async (resolve, reject) => {
    const BearerToken = await getSpotifyAccessToken();

    const axios_config = {
      url: spotifyApiHostname + spotifyApiBasePath + 'artists/' + artistId + '/albums',
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + BearerToken.access_token,
      },
      params: {
        include_groups: 'album,single',
        limit: requestSize,
        offset: offset,
      },
    };

    sendApiRequest(axios_config)
      .then((res) => {
        console.log('bla2', res);
        resolve(res);
        //   logger.info(data.length + 'לוחות סונכרנו בהצלחה', {});
      })
      .catch((error) => {
        console.log('bla3', error);
        reject(error);
        //   logger.error(error, data);
      });
  });
};

const getSeveralAlbums = async (albumIds) => {
  return new Promise(async (resolve, reject) => {
    const BearerToken = await getSpotifyAccessToken();

    const axios_config = {
      url: spotifyApiHostname + spotifyApiBasePath + 'albums',
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + BearerToken.access_token,
      },
      params: {
        ids: albumIds.join(','),
      },
    };

    sendApiRequest(axios_config)
      .then((res) => {
        console.log('bla2', res);
        resolve(res);
        //   logger.info(data.length + 'לוחות סונכרנו בהצלחה', {});
      })
      .catch((error) => {
        console.log('bla3', error);
        reject(error);
        //   logger.error(error, data);
      });
  });
};

const getArtistAlbumTracks = async (albumId, requestSize, offset) => {
  return new Promise(async (resolve, reject) => {
    const BearerToken = await getSpotifyAccessToken();

    const axios_config = {
      url: spotifyApiHostname + spotifyApiBasePath + 'albums/' + albumId + '/tracks',
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + BearerToken.access_token,
      },
      params: {
        limit: requestSize,
        offset: offset,
      },
    };

    sendApiRequest(axios_config)
      .then((res) => {
        console.log('bla2', res);
        resolve(res);
        //   logger.info(data.length + 'לוחות סונכרנו בהצלחה', {});
      })
      .catch((error) => {
        console.log('bla3', error);
        reject(error);
        //   logger.error(error, data);
      });
  });
};

module.exports = {
  searchSpotifyAritst,
  getArtistData,
  getArtistAlbums,
  getSeveralAlbums,
  getArtistAlbumTracks,
};
