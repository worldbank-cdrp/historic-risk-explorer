FROM python:2.7

# gather the dependencies for gdal and gippy
RUN apt-get update && \
    apt-get install -y libgdal-dev gdal-bin swig && \
    pip install numpy

# copy then run requirements install
# need to reinstall numpy due to some library compilation issues
ADD requirements.txt processing/requirements.txt
RUN pip install -r processing/requirements.txt && \
    pip uninstall -y numpy && pip install numpy==1.13

# following solves a pycurl bug; could be snubbed
# RUN pip uninstall pycurl && PYCURL_SSL_LIBRARY=nss pip install pycurl && y

ADD . processing

# run it!
ENTRYPOINT ["sh", "processing/scene-to-mapbox.sh"]
