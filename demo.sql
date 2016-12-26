--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.3
-- Dumped by pg_dump version 9.5.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: meta_fields_templates; Type: TABLE; Schema: public; Owner: benoror
--

CREATE TABLE meta_fields_templates (
    id integer NOT NULL,
    table_name character varying(255),
    description text,
    template jsonb
);


ALTER TABLE meta_fields_templates OWNER TO benoror;

--
-- Name: _fields_templates_id_seq; Type: SEQUENCE; Schema: public; Owner: benoror
--

CREATE SEQUENCE _fields_templates_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE _fields_templates_id_seq OWNER TO benoror;

--
-- Name: _fields_templates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: benoror
--

ALTER SEQUENCE _fields_templates_id_seq OWNED BY meta_fields_templates.id;


--
-- Name: director_id_seq; Type: SEQUENCE; Schema: public; Owner: benoror
--

CREATE SEQUENCE director_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE director_id_seq OWNER TO benoror;

--
-- Name: director; Type: TABLE; Schema: public; Owner: benoror
--

CREATE TABLE director (
    id integer DEFAULT nextval('director_id_seq'::regclass) NOT NULL,
    name text,
    height numeric,
    birthday date,
    hour time without time zone,
    veggie boolean,
    favcolor character varying(255),
    password character varying(255)
);


ALTER TABLE director OWNER TO benoror;

--
-- Name: films; Type: TABLE; Schema: public; Owner: benoror
--

CREATE TABLE films (
    id integer NOT NULL,
    title text NOT NULL,
    year date NOT NULL,
    rating real DEFAULT 0 NOT NULL,
    language text NOT NULL
);


ALTER TABLE films OWNER TO benoror;

--
-- Name: film_id_seq; Type: SEQUENCE; Schema: public; Owner: benoror
--

CREATE SEQUENCE film_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE film_id_seq OWNER TO benoror;

--
-- Name: film_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: benoror
--

ALTER SEQUENCE film_id_seq OWNED BY films.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: benoror
--

ALTER TABLE ONLY films ALTER COLUMN id SET DEFAULT nextval('film_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: benoror
--

ALTER TABLE ONLY meta_fields_templates ALTER COLUMN id SET DEFAULT nextval('_fields_templates_id_seq'::regclass);


--
-- Name: _fields_templates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: benoror
--

SELECT pg_catalog.setval('_fields_templates_id_seq', 1, true);


--
-- Data for Name: director; Type: TABLE DATA; Schema: public; Owner: benoror
--

COPY director (id, name, height, birthday, hour, veggie, favcolor, password) FROM stdin;
6	Francis Ford Coppola	\N	\N	\N	\N	\N	\N
4	Stanley Kubrick	\N	\N	\N	\N	\N	\N
10	James Cameron	\N	\N	\N	\N	\N	\N
11	Christopher Nolan	\N	\N	\N	\N	\N	\N
2	Steven Spielberg	\N	\N	\N	\N	\N	\N
5	Quentin Tarantino	\N	\N	\N	\N	\N	\N
12	Peter Jackson	\N	\N	\N	\N	\N	\N
3	Alfred Hitchcock	\N	\N	\N	\N	\N	\N
8	Woody Allen	\N	\N	\N	\N	\N	\N
1	Martin Scorsese	\N	\N	\N	\N	\N	\N
7	Orson Welles	\N	\N	\N	\N	\N	\N
9	Ridley Scott	\N	\N	\N	\N	\N	\N
\.


--
-- Name: director_id_seq; Type: SEQUENCE SET; Schema: public; Owner: benoror
--

SELECT pg_catalog.setval('director_id_seq', 35, true);


--
-- Name: film_id_seq; Type: SEQUENCE SET; Schema: public; Owner: benoror
--

SELECT pg_catalog.setval('film_id_seq', 35, true);


--
-- Data for Name: films; Type: TABLE DATA; Schema: public; Owner: benoror
--

COPY films (id, title, year, rating, language) FROM stdin;
2	The Look of Silence	2014-01-01	8.30000019	Indonesian
3	Fires on the Plain	2014-01-01	5.80000019	Japanese
5	Good Kill	2014-01-01	6.0999999	english
6	Leopardi	2014-01-01	6.9000001	english
7	Sivas	2014-01-01	7.69999981	english
8	Black Souls	2014-01-01	7.0999999	english
9	Three Hearts	2014-01-01	5.80000019	French
10	Pasolini	2014-01-01	5.80000019	english
11	Le dernier coup de marteau	2014-01-01	6.5	english
12	Manglehorn	2014-01-01	7.0999999	english
13	Hungry Hearts	2014-01-01	6.4000001	English
14	Belye nochi pochtalona Alekseya Tryapitsyna	2014-01-01	6.9000001	Russian
15	99 Homes	2014-01-01	7.30000019	english
16	The Cut	2014-01-01	6	Armenian
17	Birdman: Or (The Unexpected Virtue of Ignorance)	2014-01-01	8	English
18	La rançon de la gloire	2014-01-01	5.69999981	French
19	A Pigeon Sat on a Branch Reflecting on Existence	2014-01-01	7.19999981	english
20	Tales	2014-01-01	6.80000019	english
21	The Wonders	2014-01-01	6.80000019	Italian
22	Foxcatcher	2014-01-01	7.19999981	English
23	Mr. Turner	2014-01-01	7	English
24	Jimmy's Hall	2014-01-01	6.69999981	English
25	The Homesman	2014-01-01	6.5999999	English
26	The Captive	2014-01-01	5.9000001	english
27	Goodbye to Language	2014-01-01	6.19999981	French
28	The Search	2014-01-01	6.9000001	French
29	Still the Water	2014-01-01	6.9000001	Japanese
30	Mommy	2014-01-01	8.30000019	French
31	Two Days, One Night	2014-01-01	7.4000001	French
32	Maps to the Stars	2014-01-01	6.4000001	English
33	Saint Laurent	2014-01-01	6.5	French
34	Clouds of Sils Maria	2014-01-01	6.9000001	english
35	Winter Sleep	2014-01-01	8.5	Turkish
1	Chuang ru zhe	2014-01-01	6.19999981	english
4	Far from Men	2014-01-01	7.5	english
\.


--
-- Data for Name: meta_fields_templates; Type: TABLE DATA; Schema: public; Owner: benoror
--

COPY meta_fields_templates (id, table_name, description, template) FROM stdin;
1	films	film_basic_template	[{"key": "title", "type": "input", "templateOptions": {"type": "text", "label": "El Titulo"}}, {"key": "director", "type": "input", "templateOptions": {"type": "text", "label": "El Mero Mero Director"}}]
\.


--
-- Name: _fields_templates_pkey; Type: CONSTRAINT; Schema: public; Owner: benoror
--

ALTER TABLE ONLY meta_fields_templates
    ADD CONSTRAINT _fields_templates_pkey PRIMARY KEY (id);


--
-- Name: director_pkey; Type: CONSTRAINT; Schema: public; Owner: benoror
--

ALTER TABLE ONLY director
    ADD CONSTRAINT director_pkey PRIMARY KEY (id);


--
-- Name: film_pkey; Type: CONSTRAINT; Schema: public; Owner: benoror
--

ALTER TABLE ONLY films
    ADD CONSTRAINT film_pkey PRIMARY KEY (id);


--
-- Name: public; Type: ACL; Schema: -; Owner: benoror
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM benoror;
GRANT ALL ON SCHEMA public TO benoror;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

