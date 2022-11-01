import { Text, View, StyleSheet, ScrollView } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import * as Speech from "expo-speech";
import AppButton from "../components/AppButton";
import { SvgXml } from "react-native-svg";

function HomeScreen() {
	const buttons = [
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 32" viewBox="0 0 64 64"><path d="M51.8 14.6a1 1 0 0 0-1.237-1.5L36.458 20 32.971 5.762a1 1 0 0 0-1.942 0L27.543 20l-14.104-6.9a1 1 0 0 0-1.239 1.5l9.525 12.6-16.164 7.9A1 1 0 0 0 6 37h17.379l-4.35 17.762a1 1 0 0 0 1.771.838L32 40.787 43.2 55.6a1 1 0 0 0 .8.4.987.987 0 0 0 .429-.1 1 1 0 0 0 .542-1.141L40.622 37H58a1 1 0 0 0 .439-1.9l-16.165-7.9Zm-4.122 2.134L40.443 26.3l-2.773-1.352-.726-2.963ZM32 10.2l2.619 10.7L32 22.176 29.382 20.9Zm-15.676 6.538 10.732 5.247-.725 2.963-2.774 1.352ZM10.322 35l12.634-6.176 1.832 2.423L23.869 35Zm11.8 15.533L25.438 37h3.7l1.61 2.129Zm8.31-15.133a1 1 0 0 0-.8-.4h-3.704l.915-3.738a1 1 0 0 0-.173-.842l-1.884-2.491 2.843-1.39a1 1 0 0 0 .533-.66l.733-3 2.666 1.3a1.009 1.009 0 0 0 .878 0l2.666-1.3.734 3a1 1 0 0 0 .532.66l2.843 1.39-1.883 2.491a1 1 0 0 0-.174.842L38.073 35h-3.707a1 1 0 0 0-.8.4L32 37.471Zm11.444 15.133-8.622-11.4L34.864 37h3.7ZM53.678 35H40.132l-.919-3.753 1.832-2.423Z"/><path d="M32 51a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2zM14.9 39.553a1.042 1.042 0 0 0-1.79 0l-3 6A1 1 0 0 0 11 47h6a1 1 0 0 0 .895-1.447zM12.618 45 14 42.236 15.382 45zm36.531-22.525a1 1 0 0 0-.044.972l3 6a1 1 0 0 0 1.79 0l3-6A1 1 0 0 0 56 22h-6a1 1 0 0 0-.851.475zM54.382 24 53 26.764 51.618 24zM7.958 28.675a1 1 0 0 0 .912.009l5.914-2.958.251 1.757 1.98-.283-.448-3.131a1 1 0 0 0-1.437-.753l-5.914 2.958-.251-1.757-1.98.283.448 3.131a1 1 0 0 0 .525.744zm45.991 11.009-1.9.632.564 1.684H46a1 1 0 0 0-.949 1.316l1 3 1.9-.632L47.387 44H54a1 1 0 0 0 .949-1.316zM36 30a4 4 0 1 0-4 4 4 4 0 0 0 4-4zm-4 2a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm-9.707-17.293a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414zM23 9.414 24.586 11 23 12.586 21.414 11zM42 15a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1 4 4 0 0 0 0 8zm-1-5.731v3.462a2 2 0 0 1 0-3.462z"/><path d="M32 1a31 31 0 1 0 31 31A31.035 31.035 0 0 0 32 1Zm0 60a29 29 0 1 1 29-29 29.033 29.033 0 0 1-29 29Z"/></svg>`,
			title: "Astrology sign's news",
			color: "black",
		},
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="youtube youtuber video play"><path d="M30 12a5.71 5.71 0 0 0-5.31-5.7C18.92 6 13.06 6 7.33 6.28 4.51 6.28 2 9 2 12a43.69 43.69 0 0 0 0 8.72 5.32 5.32 0 0 0 5.28 5.33q4.35.24 8.72.24t8.67-.23A5.34 5.34 0 0 0 30 20.8a31.67 31.67 0 0 0 0-8.8Zm-2 8.63a.49.49 0 0 0 0 .12 3.36 3.36 0 0 1-3.39 3.34 166 166 0 0 1-17.28 0A3.36 3.36 0 0 1 4 20.65a42 42 0 0 1 0-8.47.45.45 0 0 0 0-.11 3.78 3.78 0 0 1 3.38-3.79c2.86-.13 5.74-.19 8.62-.19s5.76.06 8.62.19h.05c1.71 0 3.33 1.84 3.33 3.79a.76.76 0 0 0 0 .15 30.11 30.11 0 0 1 0 8.39Z"/><path d="m20.79 15.51-7.14-3.68a1 1 0 1 0-.92 1.78l5.43 2.79-4 2.07V16.4a1 1 0 0 0-2 0v3.72a1 1 0 0 0 1 1 1 1 0 0 0 .46-.11l7.14-3.72a1 1 0 0 0 .54-.89 1 1 0 0 0-.51-.89Z"/></g></svg>`,
			title: "Notifications from YT channels",
			color: "#dc2626",
		},
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64" viewBox="0 0 64 64"><path d="M58.19,37.76c-4.35-4.2-8.1-7.17-11.73-10.03c-5.19-4.1-9.67-7.64-14.64-13.78c-0.14-0.18-0.39-0.23-0.59-0.13 c-0.21,0.1-0.32,0.32-0.27,0.55C31.01,14.6,32,19.04,34,23.12C29.61,18.71,21.18,9.96,18.13,4.93c-0.13-0.22-0.4-0.3-0.63-0.19 c-0.23,0.11-0.34,0.38-0.25,0.62c0.13,0.33,2.56,6.68,6.08,12.02C18.52,13.41,9.54,6.5,0.7,2.41C0.48,2.31,0.21,2.39,0.08,2.6 c-0.14,0.2-0.09,0.48,0.1,0.64c0.16,0.13,14.25,11.88,22.7,20.97c-3.79-2.81-9.65-6.78-14.97-8.81c-0.22-0.08-0.48,0-0.6,0.21 c-0.12,0.21-0.07,0.48,0.11,0.63c0.1,0.08,8.37,6.87,14.63,12.66c-2.2-1.06-5.2-2.29-7.96-2.71c-0.23-0.03-0.45,0.1-0.53,0.32 c-0.08,0.22,0,0.46,0.19,0.59c0.09,0.05,7.53,4.78,13.45,10.08c-1.62-0.6-3.9-1.39-6.5-2.06c-0.24-0.06-0.48,0.06-0.57,0.28 c-0.1,0.23-0.02,0.48,0.18,0.62c0.1,0.06,9.84,6.4,21.25,20.46c2.61,3.22,6.92,5.1,11.83,5.14c0.06,0.01,0.12,0.01,0.18,0.01 c1.78,0,3.45-0.25,4.84-0.71c1.4-0.45,2.52-1.1,3.19-1.9C62.9,57.48,67.79,47.02,58.19,37.76z M60.85,58.39 c-1.16,1.38-4.15,2.3-7.45,2.25c-2.18-0.02-7.63-0.53-11.08-4.78c-8.21-10.13-15.6-16.3-19.18-19.02c3.59,1.1,6.09,2.23,6.12,2.24 c0.22,0.1,0.47,0.03,0.61-0.17c0.13-0.19,0.11-0.46-0.06-0.63c-4.28-4.21-10.08-8.35-13.24-10.5c4.14,1.26,8.14,3.66,8.19,3.68 c0.21,0.13,0.49,0.08,0.64-0.12c0.15-0.19,0.14-0.47-0.04-0.65c-4.35-4.26-10.94-9.88-14.61-12.96 c7.68,3.8,15.44,10.31,15.53,10.39c0.2,0.16,0.48,0.15,0.66-0.02c0.18-0.18,0.2-0.46,0.05-0.66C21.48,20.5,9.62,10.02,3.95,5.15 c11.47,6.21,22.17,15.9,22.29,16.01c0.19,0.18,0.49,0.17,0.68-0.02c0.18-0.18,0.19-0.48,0.01-0.68c-2.84-3.1-5.33-7.8-6.92-11.2 c5.68,7.22,15.54,16.8,16.04,17.28c0.18,0.18,0.47,0.19,0.66,0.02c0.2-0.17,0.23-0.46,0.08-0.66c-2.14-2.89-3.59-7.12-4.31-9.63 c4.51,5.23,8.83,8.64,13.37,12.23c3.61,2.85,7.34,5.8,11.66,9.96c4.28,4.14,5.53,8.5,5.53,12.09 C63.04,54.57,61.48,57.64,60.85,58.39z"/><path d="M58.1 42.57c-1.63-1.63-3.76-2.63-6.02-2.82-.17-.02-.35.07-.43.22-.03.03-.06.07-.1.11-.23.23-.51.34-.88.36-.34-.01-.66-.14-.88-.37-.12-.13-.3-.18-.45-.15-1.74.37-3.32 1.22-4.57 2.47-3.41 3.41-3.6 8.84-.45 12.65.14.16.38.22.57.13.4-.18.88-.09 1.21.23.3.3.41.71.28 1.1-.06.2.02.42.2.54 1.59 1.03 3.41 1.53 5.19 1.53 2.4 0 4.77-.91 6.52-2.65C61.91 52.29 61.82 46.3 58.1 42.57zM50.91 50.87c-.11.75-.49 1.39-1.02 1.77-.32.22-.67.34-1.02.34-.09 0-.19-.01-.29-.03C47.63 52.77 47 51.82 47 50.67c0-.16.01-.32.04-.49.11-.75.49-1.4 1.02-1.77.4-.29.86-.4 1.31-.31C50.44 48.3 51.12 49.51 50.91 50.87zM52.77 45.05c-.01-.45.16-.87.47-1.19.63-.62 1.73-.61 2.37.03.66.66.67 1.72.02 2.37-.31.31-.73.47-1.16.47s-.87-.17-1.2-.5C52.95 45.91 52.77 45.49 52.77 45.05zM57.45 52.64c-.17.5-.58.93-1.13 1.19-.35.17-.7.25-1.04.25-.61 0-1.15-.27-1.4-.77-.16-.31-.18-.68-.05-1.04.17-.49.58-.93 1.13-1.19.98-.47 2.06-.24 2.44.53C57.55 51.92 57.57 52.29 57.45 52.64zM50.28 35.37c.09.06.19.09.29.09.16 0 .31-.07.41-.21.16-.23.1-.54-.13-.7-.23-.16-.49-.35-.76-.55-.22-.16-.53-.12-.7.1-.16.22-.12.54.11.7C49.78 35.01 50.04 35.2 50.28 35.37zM47.87 33.56c.09.07.2.11.31.11.15 0 .29-.07.39-.19.17-.22.13-.53-.09-.7-2.54-1.99-5.54-4.52-5.57-4.54-.21-.18-.53-.15-.7.06-.18.21-.15.53.06.7C42.3 29.02 45.31 31.56 47.87 33.56z"/></svg>`,
			title: "Daily meteor summary",
			color: "#3b82f6",
		},
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64" viewBox="0 0 64 64"><path d="M9.391 24.596c.2-.497 1.917-4.925.495-7.306-.5-.837-1.318-1.341-2.368-1.458-1.424-.159-2.296.372-2.777.846-.791.775-1.055 1.873-1.134 2.687-.813.079-1.911.343-2.687 1.134-.474.482-1.004 1.355-.846 2.777.116 1.05.621 1.869 1.458 2.369.686.409 1.541.559 2.424.559 2.181 0 4.527-.911 4.881-1.054C9.089 25.048 9.289 24.848 9.391 24.596zM7.688 23.445c-1.435.509-4.035 1.135-5.131.482-.198-.119-.435-.325-.495-.873-.086-.774.191-1.06.282-1.153.456-.469 1.398-.566 1.915-.566.097 0 .179.004.239.009.292.03.588-.079.798-.289s.315-.502.289-.798c-.028-.312-.018-1.591.555-2.151.093-.092.373-.377 1.156-.285.547.061.753.296.872.495C8.804 19.378 8.256 21.864 7.688 23.445zM55.644 20.935c.336.128 2.532.934 4.59.934.88 0 1.735-.147 2.408-.559.777-.475 1.245-1.235 1.353-2.199.117-1.058-.146-1.992-.76-2.703-.688-.796-1.655-1.142-2.35-1.292-.15-.694-.496-1.662-1.292-2.35-.711-.613-1.641-.873-2.703-.76-.964.107-1.725.575-2.199 1.353-1.372 2.247.192 6.519.375 6.998C55.167 20.622 55.378 20.833 55.644 20.935zM56.397 14.399c.106-.173.273-.356.713-.405.502-.058.884.036 1.169.28.548.469.707 1.433.722 1.76.018.521.438.941.96.965.332.015 1.296.174 1.765.722.244.285.336.668.28 1.169-.049.439-.232.606-.405.713-.926.564-3.229.146-4.818-.385C56.252 17.63 55.832 15.324 56.397 14.399zM49.568 11.92C49.693 11.974 49.827 12 49.96 12s.267-.026.392-.08c.688-.292 6.743-2.961 7.665-6.617.308-1.221.017-2.433-.842-3.506C55.999.327 54.709.009 53.834 0c-.014 0-.026 0-.039 0-1.602 0-3.01.987-3.835 1.722-.832-.74-2.22-1.76-3.873-1.722-.875.009-2.165.327-3.341 1.797-.858 1.073-1.149 2.286-.842 3.506C42.825 8.959 48.881 11.628 49.568 11.92zM44.309 3.047C44.865 2.351 45.452 2.008 46.103 2c.008 0 .016 0 .023 0 1.287 0 2.648 1.281 3.065 1.776.19.229.472.36.769.36s.578-.132.769-.359C50.743 3.759 52.253 2 53.794 2c.006 0 .013 0 .02 0 .652.006 1.241.349 1.799 1.047.473.59.62 1.15.466 1.766-.534 2.124-4.287 4.246-6.117 5.093-1.766-.821-5.586-2.98-6.117-5.091C43.688 4.198 43.836 3.637 44.309 3.047zM29 19v-2c0-.553-.447-1-1-1s-1 .447-1 1v2c0 .553.447 1 1 1S29 19.553 29 19zM36 24c-.553 0-1 .447-1 1v2c0 .553.447 1 1 1s1-.447 1-1v-2C37 24.447 36.553 24 36 24zM16 15.5v1c0 1.379 1.121 2.5 2.5 2.5s2.5-1.121 2.5-2.5v-1c0-.114-.019-.223-.034-.333C20.976 15.111 21 15.059 21 15v-2c0-.231-.08-.456-.228-.635L20.473 12H22c.553 0 1-.447 1-1s-.447-1-1-1h-1.612c-.642 0-1.248.311-1.623.831-.375.52-.478 1.193-.274 1.802.038.116.098.224.176.318l.059.072C18.649 13.016 18.577 13 18.5 13 17.121 13 16 14.121 16 15.5zM19 16.5c0 .275-.225.5-.5.5S18 16.775 18 16.5v-1c0-.275.225-.5.5-.5s.5.225.5.5V16.5z"/><path d="M59.772,38c-0.766,0-1.469-0.386-1.88-1.032l-5.545-8.713C52.12,27.898,52,27.484,52,27.06V22c0-4.963-4.037-9-9-9h-2c-4.463,0-8.166,3.267-8.87,7.534C32.054,20.675,32,20.828,32,21v-5.586l0.293,0.293C32.484,15.898,32.74,16,33,16c0.129,0,0.259-0.024,0.383-0.076C33.757,15.77,34,15.404,34,15V9c0-4.963-4.037-9-9-9h-2h-2c-4.963,0-9,4.037-9,9v6c0,0.082,0.01,0.163,0.03,0.242l2,8C14.142,23.688,14.541,24,15,24h2c0.477,0,0.887-0.336,0.98-0.804l0.4-2c0.108-0.542-0.242-1.068-0.784-1.177c-0.542-0.11-1.069,0.242-1.177,0.784L16.181,22h-0.399L14,14.877V9c0-3.859,3.141-7,7-7h2h2c3.859,0,7,3.141,7,7v3.586l-0.292-0.292C31.527,12.113,31.277,12,31,12c-5.373,0-7.209-3.903-7.803-7.179c-0.099-0.542-0.611-0.904-1.163-0.806c-0.543,0.099-0.903,0.619-0.806,1.163c0.951,5.238,4.123,8.39,8.771,8.78V14v9c0,1.654-1.346,3-3,3h-7c-0.553,0-1,0.447-1,1s0.447,1,1,1h1.523l-1.261,3.152l-6-2.8c0.005-0.013,0.014-0.023,0.019-0.036l0.667-2c0.175-0.524-0.108-1.09-0.632-1.265c-0.528-0.176-1.09,0.108-1.265,0.632l-0.607,1.82l-0.113-0.053c-0.948-0.443-2.041-0.371-2.923,0.19C8.527,28.204,8,29.164,8,30.21c0,0.407,0.086,0.794,0.234,1.152c-0.004,0.005-0.011,0.007-0.015,0.013l-2.544,3.181c-1.122,1.403-1.404,3.312-0.738,4.979l5.081,12.701l0.986,10.854C11.051,63.605,11.482,64,12,64h13c0.553,0,1-0.447,1-1s-0.447-1-1-1H12.913l-0.917-10.091c-0.009-0.096-0.031-0.19-0.067-0.28L6.794,38.793c-0.4-1.001-0.23-2.146,0.443-2.988l2.343-2.928c0.322,0.178,0.68,0.3,1.062,0.351l12.7,1.694l5.263,10.526C28.781,45.798,29.134,46,29.501,46c0.15,0,0.303-0.034,0.446-0.105c0.494-0.247,0.694-0.848,0.447-1.342l-5.5-11c-0.015-0.029-0.041-0.047-0.058-0.074c-0.046-0.074-0.096-0.145-0.161-0.206c-0.039-0.036-0.083-0.06-0.126-0.089c-0.043-0.029-0.078-0.067-0.127-0.09l-2.345-1.095l1.6-3.999H27c2.757,0,5-2.243,5-5v7c0,2.457,1.786,4.495,4.126,4.912L36.07,35H34c-0.763,0-1.447,0.424-1.788,1.105c-0.342,0.682-0.27,1.484,0.188,2.094l1.6,2.134v0.292l-5.204,9.757l-0.92-0.92c0.142-0.27,0.166-0.594,0.031-0.884l-4.312-9.239c-0.805-1.725-2.311-3.033-4.13-3.59c-1.82-0.556-3.799-0.313-5.431,0.665c-2.995,1.797-4.118,5.653-2.557,8.779l5.628,11.255c0.134,0.268,0.381,0.462,0.673,0.528C17.853,56.992,17.926,57,18,57c0.221,0,0.437-0.073,0.614-0.211l7.74-6.02l1.458,1.458l-0.695,1.303c-0.26,0.487-0.075,1.093,0.412,1.354c0.49,0.257,1.093,0.073,1.354-0.412l7-13.125C35.96,41.201,36,41.039,36,40.875V40c0-0.217-0.07-0.427-0.2-0.6L34,37h2.625c0.345,0,0.665-0.178,0.848-0.47l3.302-5.282l1.324,3.531c0.506,1.347,0.37,2.828-0.37,4.063l-1.614,2.694L30.24,60.387c-0.19,0.363-0.508,0.479-0.681,0.515c-0.292,0.061-0.596-0.011-0.829-0.198l-6.105-4.885c-0.432-0.345-1.06-0.272-1.406,0.156c-0.345,0.432-0.274,1.061,0.156,1.406l6.105,4.885c0.538,0.43,1.196,0.657,1.87,0.657c0.206,0,0.413-0.021,0.619-0.064c0.873-0.183,1.612-0.74,2.03-1.527V63c0,0.553,0.447,1,1,1s1-0.447,1-1v-5c0-0.124-0.029-0.239-0.07-0.348l0.024-0.047L36,60.333V63c0,0.553,0.447,1,1,1h6c0.553,0,1-0.447,1-1s-0.447-1-1-1h-5v-2c0-0.217-0.07-0.427-0.2-0.6l-2.818-3.757l6.876-13.128L43.366,40H49c0.032,0,0.059-0.015,0.091-0.018C49.152,39.984,49.21,40,49.271,40c1.168,0,2.23,0.62,2.811,1.605C52.03,41.726,52,41.859,52,42v2.008c-1.298-0.9-2.909-1.247-4.464-0.934c-3.149,0.63-5.2,3.705-4.57,6.855c0.002,0.009,0.004,0.019,0.006,0.028l3.054,13.268C46.13,63.679,46.534,64,47,64h8c0.283,0,0.553-0.12,0.742-0.33c0.19-0.21,0.281-0.491,0.253-0.772l-1.513-14.639c-0.063-0.687-0.253-1.348-0.543-1.96C53.97,46.203,54,46.106,54,46v-0.215c1.001,2.272,2,4.808,2,6.215c0,0.449,0.3,0.844,0.733,0.964c0.428,0.117,0.893-0.063,1.124-0.449L60,48.943l2.143,3.571C62.326,52.821,62.655,53,63,53c0.089,0,0.179-0.012,0.267-0.036C63.7,52.844,64,52.449,64,52v-9.772C64,39.896,62.104,38,59.772,38z M10.906,31.245C10.39,31.177,10,30.731,10,30.21c0-0.364,0.177-0.686,0.483-0.881c0.174-0.11,0.365-0.166,0.559-0.166c0.149,0,0.301,0.033,0.444,0.101l6.177,2.883L10.906,31.245z M18.349,54.462l-5.082-10.164c-1.098-2.196-0.309-4.906,1.797-6.17c1.146-0.688,2.535-0.859,3.816-0.467c1.278,0.391,2.337,1.311,2.902,2.522l3.975,8.517L18.349,54.462z M40.975,29.257c-0.763-0.075-1.489,0.279-1.896,0.93l-1.794,2.871C37.193,33.03,37.101,33,37,33c-1.654,0-3-1.346-3-3v-8c0-0.104,0.002-0.209,0.007-0.313C34.103,22.979,35.185,24,36.5,24h3c0.275,0,0.5,0.225,0.5,0.5c0,1.379,1.121,2.5,2.5,2.5h1c0.275,0,0.5,0.225,0.5,0.5v6.667c-0.011-0.03-0.017-0.061-0.028-0.091l-1.324-3.53C42.378,29.827,41.737,29.334,40.975,29.257z M44.386,36.685c0.193,0.481,0.466,0.916,0.785,1.315h-0.967C44.309,37.568,44.369,37.129,44.386,36.685z M47.796,62l-2.872-12.478c-0.195-0.997,0.007-2.012,0.571-2.858c0.567-0.851,1.432-1.43,2.435-1.63c1.063-0.216,2.171,0.038,3.039,0.687c0.869,0.648,1.424,1.64,1.522,2.731L53.892,62H47.796z M62,48.39l-1.143-1.904c-0.361-0.602-1.354-0.602-1.715,0l-1.654,2.758c-0.626-2.046-1.716-4.423-2.653-6.467c-0.277-0.604-0.53-1.156-0.738-1.63C53.26,39.235,51.365,38,49.271,38C47.468,38,46,36.532,46,34.729V27.5c0-1.379-1.121-2.5-2.5-2.5h-1c-0.275,0-0.5-0.225-0.5-0.5c0-1.379-1.121-2.5-2.5-2.5h-3c-0.275,0-0.5-0.225-0.5-0.5v-4.395C37.271,15.807,39.043,15,41,15h2c3.859,0,7,3.141,7,7v5.06c0,0.807,0.229,1.592,0.661,2.271l5.544,8.712C56.985,39.268,58.319,40,59.772,40C61.001,40,62,40.999,62,42.228V48.39z"/></svg>`,
			title: "Astrology sign compatibility",
			color: "#ec4899",
		},
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#AD080F" d="m10.17 13.46-.01 5.06c0 4.81-.01 5.08-.06 5.08-.18 0-1.7.1-2.21.15-.33.03-1 .1-1.48.16-.49.06-.89.1-.9.09 0-.01-.01-5.41-.01-12.01V0l4.67 13.46zM18.49.01h-4.63l-.01 5.31v5.329l4.63 13.341c.02-.01.02-5.42.02-12.01L18.49.01z"/><path fill="#DF0D12" d="M18.48 23.99h-.04c-.08 0-.24-.01-.43-.03-1.07-.13-2.48-.26-3.62-.31-.37-.02-.68-.04-.69-.04 0 0-.29-.84-.84-2.41-.53-1.53-1.31-3.77-2.32-6.68l-.37-1.06L5.5 0h4.65l.2.57.88 2.53 7.25 20.89z"/></svg>`,
			title: "Latest movies on Netflix",
			color: "#ec4899",
		},
	];
	setTimeout(() => {
		Speech.speak("Hello there !");
		Speech.speak("What you wana do ?");
	}, 500);

	return (
		<TailwindProvider>
			<View className="">
				<Text className="pt-3 px-3 text-2xl mt-5 text-center text-gray-700">
					Hello there !
				</Text>
				<Text className="px-3 text-2xl mx-5 text-center text-gray-700">
					What you want to do ?
				</Text>
			</View>
			<ScrollView className="mt-11">
				{buttons.map((b) => {
					return (
						<AppButton key={b.title}>
							<View style={style.buttonContainer}>
								<SvgXml xml={b.icon} width={50} height={40} fill={b.color} />
								<Text className="text-lg px-3 text-gray-700">{b.title}</Text>
							</View>
						</AppButton>
					);
				})}
			</ScrollView>
		</TailwindProvider>
	);
}

const style = StyleSheet.create({
	buttonContainer: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
	},
});

export default HomeScreen;
