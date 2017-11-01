
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
# install numpy for gippy
RUN pip install numpy
RUN pip install -r processing/requirements.txt
RUN pip uninstall -y numpy && pip install numpy==1.13.3
# following solves a pycurl bug; could be snubbed
# RUN pip uninstall pycurl && PYCURL_SSL_LIBRARY=nss pip install pycurl && y
# python modules from processing pipe
COPY process.py processing/process.py
COPY processing-downloading.py processing/processing-downloading.py
COPY download.py processing/download.py
COPY landsat5.py processing/landsat5.py
COPY dip.py processing/dip.py
COPY sensors.py processing/sensors.py
# bash script that runs the pipe
COPY scene-to-mapbox.sh processing/scene-to-mapbox.sh
RUN chmod +x processing/scene-to-mapbox.sh
# config file
COPY processing-config.yml processing/processing-config.yml
# set env vars for mapbox upload
ENV MAPBOX_ACCOUNT ${MAPBOX_ACCOUNT}
ENV LOCATION ${LOCATION}
# run it!
ENTRYPOINT ["sh", "processing/scene-to-mapbox.sh"]
