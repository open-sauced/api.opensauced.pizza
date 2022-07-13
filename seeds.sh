#!/bin/bash
URL_BASE="https://raw.githubusercontent.com/open-sauced/actions/main/hot-supabase/seed"
curl -S "$URL_BASE/users.sql" -o ./data/users.sql
curl -S "$URL_BASE/contributions.sql" -o ./data/contributions.sql
curl -S "$URL_BASE/recommendations.sql" -o ./data/recommendations.sql
curl -S "$URL_BASE/repos.sql" -o ./data/repos.sql
curl -S "$URL_BASE/users_to_repos_stars.sql" -o ./data/users_to_repos_stars.sql
curl -S "$URL_BASE/users_to_repos_votes.sql" -o ./data/users_to_repos_votes.sql
