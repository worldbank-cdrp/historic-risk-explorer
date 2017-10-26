FROM geodata/gdal
RUN apt-get update
RUN apt-get -y install git
# pyCurl ~ Homura deps
RUN apt-get -y install build-essential libcurl4-openssl-dev python-dev
RUN mkdir /processing
COPY requirements.txt /processing/requirements.txt
COPY processing.py /processing/processing.py
COPY sensors.py /processing/sensors.py
COPY scene-to-mapbox.sh /processing/scene-to-mapbox.sh
COPY processing-config.yml /processing/processing-config.yml
COPY landsat5.py /processing/landsat5.py
ENV MAPBOX_ACCOUNT ${MAPBOX_ACCOUNT}
ENV MAPBOX_ACCESS_TOKEN ${MAPBOX_ACCESS_TOKEN}
RUN chmod +x /processing/scene-to-mapbox.sh
RUN pip install --upgrade setuptools
RUN PYCURL_SSL_LIBRARY=nss  && pip install numpy && pip install -r /processing/requirements.txt
ENTRYPOINT ['/bin/bash/', '/processing/scene-to-mapbox.sh']
