
FROM python:2.7.13
# gather the dependencies for gdal and gippy
RUN \
    apt-get update; \
    apt-get install -y libgdal-dev gdal-bin swig; \
    pip install numpy
# make processing directory
RUN mkdir processing
# copy then run requirements install
COPY requirements.txt processing/requirements.txt
RUN pip install -r processing/requirements.txt
# following solves a pycurl bug; could be snubbed
RUN pip uninstall pycurl && PYCURL_SSL_LIBRARY=nss pip install pycurl
# python modules from processing pipe
COPY process.py processing/process.py
COPY processing-downloading.py processing/processing-downloading.py
COPY download.py processing/download.py
COPY landsat5.py processing/landsat5.py
COPY dip.py processing/dip.py
COPY sensors.py processing/sensors.py
# bash script that runs the pipe
COPY scenes-to-mapbox.sh processing/scenes-to-mapbox.sh
RUN chmod +x processing/scense-to-mapbox
# set env vars for mapbox upload
ENV MAPBOX_ACCOUNT ${MAPBOX_ACCOUNT}
ENV LOCATION ${LOCATION}
# run it!
ENTRYPOINT [ "/bin/bash", 'scene-to-mapbox.sh processing' ]