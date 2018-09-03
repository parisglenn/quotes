FROM ruby:2.5
RUN echo "build something new"
RUN apt-get update -qq && apt-get install -y build-essential apt-transport-https apt-utils

# for nokogiri
RUN apt-get install -y libxml2-dev libxslt1-dev

# for a JS runtime
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

# for yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y yarn

RUN mkdir /recipes
WORKDIR /recipes
COPY Gemfile /recipes/Gemfile
COPY Gemfile.lock /recipes/Gemfile.lock
COPY package.json /recipes/package.json
RUN bundle install
# RUN yarn install
# COPY ./recipes/* /recipes
COPY . /recipes
RUN bundle exec rake webpacker:install:react
# RUN ./bin/rails webpacker:install:react
RUN npm install
RUN yarn install
COPY . /recipes
# VOLUME ["recipes/public"]
