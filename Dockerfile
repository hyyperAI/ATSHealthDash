FROM python:3.11

WORKDIR /code

COPY requirements.txt .

# Update pip for potential timeout handling improvements
RUN pip install --upgrade pip

# Increase timeout for package downloads
RUN pip install --default-timeout=100 -r requirements.txt

COPY Data_Processing/ .

CMD [ "python", "./apis/app.py" ]
